export const FILTER_KEYS = ['name', 'surname'] as const;
export type FilterKey = typeof FILTER_KEYS[number];

export interface FilterValue {
  key: FilterKey;
  value: string;
}

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
