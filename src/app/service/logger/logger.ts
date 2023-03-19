import { ILoggerService } from "./logger.i";

export class LoggerService implements ILoggerService {
  info(message: string, obj?: any) {
    console.log(`[info]: ${message} ${JSON.stringify(obj)}`);
  }

  error(message: string, obj?: any) {
    console.log(`[error]: ${message} ${JSON.stringify(obj)}`);
  }
}
