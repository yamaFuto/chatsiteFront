export type DataWithPagination = {
    current_page: number;
    last_page: number;
    path: string; // apiのpath(http://example.com/api/postなど)
    per_page: number;
    from: number; // 何番目のデータから始まるか
    to: number; // 何番目のデータまでか
    total: number;
    links: {
      url: string;
      label: string;
      active: boolean;
    }
};