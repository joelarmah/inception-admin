// export type PagedResponse<
// TKey extends string = "items",
// T = unknown> = {
//   items: T[];
//   total: number;
//   page: number;
//   page_size: number;
//   pages: number;
// };

export type PagedResponse<
  T = unknown,
  TKey extends string = "items"
> = {
  [K in TKey]: T[];
} & {
  total: number;
  page: number;
  page_size: number;
  pages: number;
};
