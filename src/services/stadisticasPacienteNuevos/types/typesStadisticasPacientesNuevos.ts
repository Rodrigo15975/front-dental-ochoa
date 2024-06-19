export interface MonthlyStats {
  _id: {
    year: number;
    month: number;
  };
  count: number;
  previousCount: number;
  difference: number;
}
