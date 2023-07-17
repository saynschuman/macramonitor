'use client';

import {
  Button,
  Card,
  Group,
  Select,
  Space,
  Stack,
  Text,
  Title,
  createStyles,
  rem,
} from '@mantine/core';
import { IconArrowRight, IconArrowUp } from '@tabler/icons-react';
import { BalanceChart } from './BalanceChart';

const useStyle = createStyles((theme) => ({
  section: {
    padding: theme.spacing.lg,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const BalanceLeftStack = () => (
  <Stack spacing="lg" style={{ flex: 1 }}>
    <Stack spacing={4}>
      <Text size="xs" c="gray.6">
        Availabel Balance
      </Text>
      <Space h={4} />
      <Title order={2}>$ 9572.23</Title>
      <Text size="sm" c="gray.5">
        + 0.0012.23(0.2%)
        <span>
          <IconArrowUp size={12} color="green" />
        </span>
      </Text>
    </Stack>

    <Group>
      <Stack spacing={4}>
        <Text size="sm" c="gray.6">
          Income
        </Text>
        <Title order={4}>$ 5729.28</Title>
      </Stack>
      <Stack spacing={4}>
        <Text size="sm" c="gray.6">
          Expense
        </Text>
        <Title order={4}>$ 1329.89</Title>
      </Stack>
    </Group>
    <Button
      size="sm"
      w={rem(140)}
      rightIcon={<IconArrowRight size={14} />}
    >
      View more
    </Button>
  </Stack>
);

const BalanceRightStack = () => (
  <Stack style={{ flex: 1 }}>
    <Stack align="start">
      <Text size="sm" c="gray.6">
        Etherum
      </Text>
      <Title order={4}>
        1.5236 ETH ={' '}
        <Text component="span" size="md" fw="bold" c="gray.6">
          $1123.64
        </Text>
      </Title>
    </Stack>
    <Stack align="start">
      <Text size="sm" c="gray.6">
        Bitcoin
      </Text>
      <Title order={4}>
        0.0236 BTC ={' '}
        <Text component="span" size="md" fw="bold" c="gray.6">
          $923.64
        </Text>
      </Title>
    </Stack>
    <Stack align="start">
      <Text size="sm" c="gray.6">
        Doge
      </Text>
      <Title order={4}>
        2210 DOGE ={' '}
        <Text component="span" size="md" fw="bold" c="gray.6">
          $112.64
        </Text>
      </Title>
    </Stack>
  </Stack>
);

export function BalanceCard() {
  const { classes } = useStyle();

  return (
    <Card radius="md">
      <Card.Section className={classes.section}>
        <Title order={5}>Wallet Balance</Title>
        <Select
          value="march"
          size="sm"
          withinPortal
          data={[
            { value: 'march', label: 'March' },
            { value: 'april', label: 'April' },
          ]}
        />
      </Card.Section>
      <Card.Section className={classes.section}>
        <BalanceLeftStack />
        {/* <BalanceChart /> */}
        <BalanceRightStack />
      </Card.Section>
    </Card>
  );
}
