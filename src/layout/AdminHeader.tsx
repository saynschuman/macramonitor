import { ActionIcon, Box, Header, createStyles } from '@mantine/core';

import { IconLogout } from '@tabler/icons-react';

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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export function AdminHeader({ burger }: Props) {
  const { classes } = useStyles();

  return (
    <Header height={60} withBorder={false} className={classes.header}>
      {burger && burger}
      <Box sx={{ flex: 1 }} />
      <ActionIcon>
        <IconLogout size="1.25rem" />
      </ActionIcon>
    </Header>
  );
}
