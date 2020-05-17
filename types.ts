export type FilterKey = 'name' | 'surname';

export interface FilterValue {
  key: FilterKey;
  value: string;
}

export const FILTER_KEYS: FilterKey[] = ['name', 'surname'];

export function isFilterKey(key: string): key is FilterKey {
  return FILTER_KEYS.includes(key as FilterKey);
}

export function parseFilter(queryParams: {
  [key: string]: string;
}): FilterValue[] {
  const filter: FilterValue[] = [];
  for (const key in queryParams) {
    if (isFilterKey(key)) {
      filter.push({ key, value: queryParams[key] });
    }
  }
  return filter;
}
