export interface IENV {
  PORT?: number;
  BOT_BASE_URL?: string;
}

export interface IConfig {
  port: number;
  botBaseUrl: string;
}

export class AppConfig implements IConfig {
  public port: number = 3001;
  public botBaseUrl: string = "http://localhost:3002";

  constructor() {
    this.port = Number(process.env.PORT) || this.port;
    this.botBaseUrl = process.env.BOT_BASE_URL || this.botBaseUrl;
  }
}
