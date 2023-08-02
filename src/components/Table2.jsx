import { MantineReactTable } from 'mantine-react-table';
import { useMemo } from 'react';
import { tableMock } from './tableMocks';
import { Grid, NativeSelect, Paper, Title } from '@mantine/core';

export const Table2 = () => {
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
    <Paper withBorder radius="md" p="xl">
      <Grid>
        <Grid.Col sm={6}>
          <NativeSelect label="Attetation Clinic Type (UDF)" data={['All', 'Not set', 'Client']} />
        </Grid.Col>
        <Grid.Col sm={6}>
          <NativeSelect label="Attetation Clinic" data={['All', 'Not set', 'Client']} />
        </Grid.Col>
        <Grid.Col sm={6}>
          <NativeSelect label="Scallin factor" data={['0.7', '0.8', '0.9']} />
        </Grid.Col>
        <Grid.Col sm={6}>
          <NativeSelect label="Bonus" data={['0.0', '0.1', '0.2']} />
        </Grid.Col>
      </Grid>
      <MantineReactTable
        enableSorting={false}
        enableColumnActions={false}
        enableColumnFilters={false}
        enableDensityToggle={false}
        enableFullScreenToggle={false}
        columnFilterDisplayMode="popover"
        columns={columns}
        data={Object.values(tableMock).map((value) => ({
          tin: value.tin,
          action: value.action,
          udf: value.udf,
          pct: value.pct,
          pi: value.pi,
          sqm: value.sqm,
        }))}
        mantinePaperProps={{ shadow: '0', withBorder: false }}
      />
    </Paper>
  );
};
