import { AxiosResponse, AxiosRequestConfig } from "axios";
import { News } from "@datatypes/news";
import HttpClient from "@data/client";

export class NewsClient extends HttpClient {
  APIKEY = "82ad909df3764391921aa346daff1120";

  public constructor() {
    super("https://newsapi.org");
  }

  protected _initializeRequestInterceptor(): void {
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig): AxiosRequestConfig => {
        config.params.apiKey = this.APIKEY;
        return config;
      }
    );
  }

  public async getHeadlines(country: string = "us"): Promise<News> {
    let res: AxiosResponse<News> = await this.instance.get<News>(
      "/v2/top-headlines",
      {
        params: { country },
      }
    );
    return res.data;
  }

  public async getNews(search: string): Promise<News> {
    let res: AxiosResponse<News> = await this.instance.get<News>(
      "/v2/everything",
      {
        params: { q: search },
      }
    );
    return res.data;
  }
}
