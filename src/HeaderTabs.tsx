import { useState } from 'react';
import {
  createStyles,
  Container,
  Group,
  Select,
  Tabs,
  Burger,
  rem,
  Image,
  Grid,
  Text,
  Anchor,
  Button,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from './assets/logo.png';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
    }`,
    marginBottom: rem(120),
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 500,
    height: rem(38),
    backgroundColor: 'transparent',
    marginTop: 40,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },

    '&[data-active]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
    },
  },

  secondaryLink: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    fontSize: theme.fontSizes.xs,
    textTransform: 'uppercase',
    transition: 'color 100ms ease',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },
}));

interface HeaderTabsProps {
  tabs: string[];
  links: LinkProps[];
}

interface LinkProps {
  label: string;
  link: string;
}

export function HeaderTabs({ tabs, links }: HeaderTabsProps) {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [year, setYear] = useState<string>('2020');
  const [stage, setStage] = useState<string>('Stage 1');
  const [type, setType] = useState<string>('Guidnce Analitics');

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  const secondaryItems = links.map((item) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      onClick={(event) => event.preventDefault()}
      className={classes.secondaryLink}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="full">
        <Group position="apart">
          <Image src={logo} width={200} alt="logo" />

          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

          <Group spacing={5}>
            <Text>Welcome</Text>
            <Text sx={{ textDecoration: 'underline' }}>Jay Fisher</Text>
            <Text>of</Text>
            <Select
              placeholder="Analitics"
              value={type}
              onChange={(d) => d && setType(d)}
              data={['Guidnce Analitics', 'Guidnce Analitics 1', 'Guidnce Analitics 2']}
            />
            <Select
              placeholder="Year"
              value={year}
              onChange={(d) => d && setYear(d)}
              data={['2020', '2021', '2022', '2023']}
            />
            <Select
              placeholder="Stage"
              value={stage}
              onChange={(d) => d && setStage(d)}
              data={['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4']}
            />
          </Group>
        </Group>
        <Group position="right" mt={10} mb={5}>
          {secondaryItems}
        </Group>
        <Group position="right"  mb={5}>
          <Button>Page Help</Button>
        </Group>
        <Group position="right" sx={{ fontSize: 12 }}>
          <Text>Your session will expire in</Text>
          <Text color="red">59 minutes and 49 seconds</Text>
        </Group>
      </Container>
      <Container>
        <Tabs
          defaultValue="Home"
          variant="outline"
          classNames={{
            root: classes.tabs,
            tabsList: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}
