export interface ApiQuotes {
  author: string;
  category: string;
  text: string;
}

export interface Quotes extends ApiQuotes {
  id: string;
}

export interface Constants {
  title: string;
  id: string;
}