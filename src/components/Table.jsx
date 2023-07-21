import { Grid, Paper, Space, Title } from '@mantine/core';
import { Tabs } from '@mantine/core';
import { FormDrawer } from './FormDrawer';
import { UsersTable } from './UsersTable';

export const Table = () => {
  return (
    <Paper withBorder radius="md" p="md">
      <Grid justify="space-between">
        <Title order={4}>Users</Title>
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
          <UsersTable />
        </Tabs.Panel>
        <Tabs.Panel value="second">
          <UsersTable />
        </Tabs.Panel>
        <Tabs.Panel value="third">
          <UsersTable />
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
};
