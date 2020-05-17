export type FilterKey = 'name' | 'surname';

export interface FilterValue {
  key: FilterKey;
  value: string;
}

export const FILTER_KEYS: FilterKey[] = ['name', 'surname'];

export function parseFilter(queryParams: {
  [key: string]: string;
}): FilterValue[] {
  const filter: FilterValue[] = [];
  for (const key in queryParams) {
    if (FILTER_KEYS.includes(key as FilterKey)) {
      filter.push({ key: key as FilterKey, value: queryParams[key] });
    }
  }
  return filter;
}
