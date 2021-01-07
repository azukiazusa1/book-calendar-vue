export interface BookItem {
  id: string;
  price?: number;
  auhtors?: string[];
  categories?: string[];
  imageLinks?: ImageLinks;
  pageCount: number;
  publishedDate: string;
  publisher?: string;
  title: string;
  description?: string;
  infoLink: string;
  previewLink: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface Result {
  items: BookItem[];
  kind: string;
  totalItems: number;
}

export type OrderBy = 'relevance' | 'newest'
export type PrintType = 'all' | 'books' | 'magazines'

export interface Params {
  q?: string;
  orderBy?: OrderBy;
  printType?: PrintType;
  startIndex?: number;
}

export interface BookRepositoryInterface {
  find(params: Params): Promise<Result>;
}
