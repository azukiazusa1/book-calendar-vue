/**
 * 未読
 */
export const UNREAD = 'unread'

/**
 * 読書中
 */
export const READING = 'rading'

/**
 * 読了
 */
export const READ = 'read'

/**
 * ストック
 */
export const STOCK = 'stock'

/**
 * 本の登録状態
 */
export type Status = typeof UNREAD | typeof READING | typeof READ | typeof STOCK

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
  status: Status;
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
  q: string;
  orderBy: OrderBy;
  printType?: PrintType;
  startIndex?: number;
}

export interface BookRepositoryInterface {
  find(params: Params): Promise<Result>;
}
