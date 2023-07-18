import { ActionIcon, Box, Grid, Header, Select, createStyles } from '@mantine/core';

import { IconLogout } from '@tabler/icons-react';
import { useState } from 'react';
import { MultiLevelSelect } from '../components/MultiLevelSelect';

interface Props {
  burger?: React.ReactNode;
}

const useStyles = createStyles((theme) => ({
  header: {
    padding: theme.spacing.md,
    background: 'transparent',
    color: theme.black,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

export function AdminHeader({ burger }: Props) {
  const { classes } = useStyles();
  const [value, setValue] = useState<string>('2021');

  return (
    <Header height={60} withBorder={false} className={classes.header}>
      {burger && burger}
      <Box sx={{ flex: 1 }} />
      <Grid align="top">
        <MultiLevelSelect />
        <Select
          ml={10}
          value={value}
          size="sm"
          withinPortal
          onChange={(v) => v && setValue(v)}
          data={[
            { value: '2021', label: '2021' },
            { value: '2022', label: '2022' },
            { value: '2023', label: '2023' },
          ]}
        />
        <ActionIcon ml={5} mt={3}>
          <IconLogout size="1.25rem" />
        </ActionIcon>
      </Grid>
    </Header>
  );
}
