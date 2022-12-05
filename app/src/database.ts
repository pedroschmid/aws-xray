import { PrismaClient } from "@prisma/client";
import AWSXRay from "aws-xray-sdk";

import { onQueryEvent } from "./tracing";

AWSXRay.captureMySQL(require('mysql'));

const prismaClient = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prismaClient.$on("query", onQueryEvent);

export default prismaClient;