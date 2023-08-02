import { MantineReactTable } from 'mantine-react-table';
import { useMemo } from 'react';
import { usersMock } from './usersMock';
import { NativeSelect, Title } from '@mantine/core';

export const Table1 = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'tin',
        header: 'TIN Name',
      },
      {
        accessorKey: 'action',
        header: 'Action Item',
      },
      {
        accessorKey: 'udf',
        header: (
          <div>
            <Title order={6} sx={{ marginBottom: 5 }}>
              Attestation Clinic Type (UDF)
            </Title>
            <NativeSelect data={['All', 'Not set', 'Client']} withAsterisk />
          </div>
        ),
      },
      {
        accessorKey: 'pct',
        header: 'PTC ONLY',
      },
      {
        accessorKey: 'pi',
        header: (
          <div>
            <Title order={6} sx={{ marginBottom: 5 }}>
              PI Source Data
            </Title>
            <NativeSelect data={['All', 'Not set', 'Client']} withAsterisk />
          </div>
        ),
      },
      {
        accessorKey: 'sqm',
        header: 'SQM Source Data',
      },
    ],
    []
  );
  return (
    <>
      <div>
        <span style={{ color: 'green', marginRight: 5 }}>Numper of records:</span>
        <b>134</b>
      </div>
      <MantineReactTable
        enableSorting={false}
        enableColumnActions={false}
        enableColumnFilters={false}
        enableDensityToggle={false}
        enableFullScreenToggle={false}
        columnFilterDisplayMode="popover"
        columns={columns}
        data={Object.values(usersMock).map((value) => ({
          tin: value.tin,
          action: value.action,
          udf: value.udf,
          pct: value.pct,
          pi: value.pi,
          sqm: value.sqm,
        }))}
        mantinePaperProps={{ shadow: '0', withBorder: false }}
      />
    </>
  );
};
