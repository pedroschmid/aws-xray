import AWSXRay from "aws-xray-sdk-core";
import { Prisma } from "@prisma/client";

function getQueryWithParams(query: string, params: any) {
  let i = 1;

  while (query.indexOf("$") >= 0) {
    query = query.replace(
      query[query.indexOf("$")] + query[query.indexOf("$") + 1],
      `"${params[i - 1]}"`
    );

    i++;
  }

  return query;
};

export async function onQueryEvent (event: Prisma.QueryEvent) {
  try {
    const segment = AWSXRay.getSegment();

    if (segment) {
      const paramsArr = JSON.parse(event.params);
      const query = getQueryWithParams(event.query, paramsArr);

      const start_time = event.timestamp.valueOf() * 1e-3;
      const end_time = (event.timestamp.valueOf() + event.duration) * 1e-3;

      const subSegment = segment.addNewSubsegment("mysql");

      subSegment.addSqlData({ sanitized_query: query });

      subSegment.addAttribute("start_time", start_time);
      subSegment.addAttribute("end_time", end_time);
      subSegment.addAttribute("in_progress", false);

      subSegment.streamSubsegments();
    }
  } catch (e) {}
};
