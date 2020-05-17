import { parseFilter, FilterValue } from './types';

describe('parseFilter function', () => {
  it('converts values with supported keys', () => {
    const queryParams = {
      name: 'John',
      surname: 'Doe',
      country: 'USA',
    };
    const expected: FilterValue[] = [
      { key: 'name', value: 'John' },
      { key: 'surname', value: 'Doe' },
    ];

    const parsed = parseFilter(queryParams);

    expect(parsed).toEqual(expected);
  });
});
