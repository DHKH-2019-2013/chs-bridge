import { ILoggerService } from "./logger.i";

export class LoggerService implements ILoggerService {
  info(message: string) {
    console.log(`[info]: ${message}`);
  }

  error(message: string) {
    console.log(`[error]: ${message}`);
  }
}
