export interface ILoggerService {
  info(message: string, obj?: any): void;
  error(message: string, obj?: any): void;
}
