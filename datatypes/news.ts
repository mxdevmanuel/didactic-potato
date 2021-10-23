export interface Source {
  id?: String;
  name?: String;
}

export interface Article {
  source: Source;
  author: String;
  title: String;
  description: String;
  url: String;
  urlToImage: String;
  publishedAt: Date;
  content: String;
}

export interface News {
  status: String;
  totalResults: Number;
  articles: Article[];
}
