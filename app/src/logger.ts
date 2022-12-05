import { createLogger, transports, format } from "winston";

export const logger = createLogger({
  transports: [new transports.Console()],
  format: format.combine(
    format.timestamp(),
    format.colorize(),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] [${level}]: ${message}`;
    })
  ),
});
