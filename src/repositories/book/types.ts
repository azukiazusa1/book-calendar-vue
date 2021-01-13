/**
 * 未読
 */
export const UNREAD = 'unread'

/**
 * 読書中
 */
export const READING = 'reading'

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

/**
 * 本の情報
 */
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
  startDate?: Date | string;
  endDate?: Date | string;
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

/**
 * 並び順：おすすめ順
 */
export const RELEVANCE = 'relevance'

/**
 * 並び順：発売日順
 */
export const NEWEST = 'newest'

/**
 * 並び順
 */
export type OrderBy = typeof RELEVANCE | typeof NEWEST

/**
 * 取得タイプ：すべて
 */
export const ALL = 'all'

/**
 * 取得タイプ：本
 */
export const BOOKS = 'books'

/**
 * 取得タイプ：雑誌
 */
export const magazines = 'magazines'

/**
 * 取得タイプ
 */
export type PrintType = 'all' | 'books' | 'magazines'

export interface Params {
  q: string;
  orderBy: OrderBy;
  printType?: PrintType;
  startIndex?: number;
}

export interface BookRepositoryInterface {
  find(params: Params): Promise<Result>;
  regist(Book: BookItem): Promise<BookItem>;
}
