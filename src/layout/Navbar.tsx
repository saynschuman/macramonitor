import {
  Group,
  Image,
  Navbar as MantineNavbar,
  ScrollArea,
  createStyles,
  rem,
} from '@mantine/core';

import { NavItem } from '../navlinks';
import logo from '../assets/logo.png';
import { NavLinksGroup } from './NavLinksGroup';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.white,
    paddingBottom: 0,
    boxShadow: 'rgba(113, 122, 131, 0.11) 0px 7px 30px 0px',
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}));

interface Props {
  data: NavItem[];
  hidden?: boolean;
}

export function Navbar({ data, hidden }: Props) {
  const { classes } = useStyles();
  const links = data.map((item) => <NavLinksGroup key={item.label} {...item} />);

  return (
    <MantineNavbar
      hidden={hidden}
      hiddenBreakpoint="sm"
      height="100vh"
      width={{ sm: 260 }}
      p="md"
      withBorder={false}
      className={classes.navbar}
    >
      <MantineNavbar.Section>
        <Group position="apart" h={rem(40)}>
          <img width={200} src={logo} alt="logo" />
        </Group>
      </MantineNavbar.Section>
      <MantineNavbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}
