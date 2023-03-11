import rp from "request-promise";

export class HttpService {
  async get(url: string, params: any): Promise<any> {
    const options = {
      url,
      qs: params,
      method: "GET",
      json: true,
    };
    return await rp(options)
      .then((data) => {
        return data;
      })
      .catch((e) => {
        throw new Error(e);
      });
  }
}
