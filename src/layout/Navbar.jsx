import { Box, Group, Navbar as MantineNavbar, ScrollArea, createStyles, rem } from '@mantine/core';
import PropTypes from 'prop-types';

import { NavLinksGroup } from './NavLinksGroup';
import logo from '../assets/logo.png';

const useStyles = createStyles((theme) => ({
  navbar: {
    position: 'absolute',
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

export function Navbar({ data, hidden, burger }) {
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
      <Box sx={{ position: 'absolute', right: 0, top: 24 }}>{burger && burger}</Box>
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

Navbar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.shape,
      link: PropTypes.string,
      initiallyOpened: PropTypes.bool,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          link: PropTypes.string,
        })
      ),
    })
  ).isRequired,
  hidden: PropTypes.bool,
  burger: PropTypes.node,
};
