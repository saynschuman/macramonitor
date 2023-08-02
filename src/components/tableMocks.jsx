import { NativeSelect } from '@mantine/core';

export const tableMock = {
  1: {
    tin: 'Zachary',
    action: 'Davis',
    udf: '261 Battle Ford',
    pct: 'Columbus',
    pi: 'Ohio',
    sqm: 'Ohio',
  },
  2: {
    tin: 'Zachary',
    action: 'Davis',
    udf: '261 Battle Ford',
    pct: 'Columbus',
    pi: <NativeSelect data={['No status', 'Employer', 'Client']} withAsterisk />,
    sqm: 'Ohio',
  },
  3: {
    tin: 'Zachary',
    action: 'Davis',
    udf: '261 Battle Ford',
    pct: 'Columbus',
    pi: 'Ohio',
    sqm: 'Ohio',
  },
  4: {
    tin: 'Zachary',
    action: 'Davis',
    udf: '261 Battle Ford',
    pct: 'Columbus',
    pi: 'Ohio',
    sqm: 'Ohio',
  },
};
