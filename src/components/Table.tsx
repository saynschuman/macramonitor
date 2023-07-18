import { Grid, Paper, Space, Title } from '@mantine/core';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { useMemo } from 'react';
import { Tabs } from '@mantine/core';
import { FormDrawer } from './FormDrawer';

type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
};

const data: Person[] = [
  {
    name: {
      firstName: 'Zachary',
      lastName: 'Davis',
    },
    address: '261 Battle Ford',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Robert',
      lastName: 'Smith',
    },
    address: '566 Brakus Inlet',
    city: 'Westerville',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Yan',
    },
    address: '7777 Kuhic Knoll',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'John',
      lastName: 'Upton',
    },
    address: '722 Emie Stream',
    city: 'Huntington',
    state: 'Washington',
  },
  {
    name: {
      firstName: 'Nathan',
      lastName: 'Harris',
    },
    address: '1 Kuhic Knoll',
    city: 'Ohiowa',
    state: 'Nebraska',
  },
];

export const Table = () => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ],
    []
  );

  return (
    <Paper withBorder radius="md" p="md">
      <Grid justify="space-between">
        <Title order={5}>Users</Title>
        <FormDrawer />
      </Grid>
      <Space h="md" />
      <Tabs defaultValue="first">
        <Tabs.List>
          <Tabs.Tab value="first">First tab</Tabs.Tab>
          <Tabs.Tab value="second">Second tab</Tabs.Tab>
          <Tabs.Tab value="third">Third tab</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="first">
          <MantineReactTable
            columns={columns}
            data={data}
            mantinePaperProps={{ shadow: '0', withBorder: false }}
          />
        </Tabs.Panel>
        <Tabs.Panel value="second">
          <MantineReactTable
            columns={columns}
            data={data}
            mantinePaperProps={{ shadow: '0', withBorder: false }}
          />
        </Tabs.Panel>
        <Tabs.Panel value="third">
          <MantineReactTable
            columns={columns}
            data={data}
            mantinePaperProps={{ shadow: '0', withBorder: false }}
          />
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
};
