import { News } from "@datatypes/news";
import HttpClient from "@data/client";

export class NewsClient extends HttpClient {
  APIKEY = "82ad909df3764391921aa346daff1120";
  public constructor() {
    super("https://newsapi.org");
  }

  public async getNews(): Promise<News> {
    return this.instance.get<News>("/v2/everything", {
      params: { q: "bitcoin", apiKey: this.APIKEY },
    });
  }
}
