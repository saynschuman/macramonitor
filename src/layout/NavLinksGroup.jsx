import { Box, Collapse, Group, ThemeIcon, UnstyledButton, createStyles, rem } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import PropTypes from 'prop-types';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    color: theme.black,
    fontSize: theme.fontSizes.sm,
    textDecoration: 'none',

    '&:hover': {
      backgroundColor: theme.colors.green[0],
      color: theme.colors.green[8],
    },
  },

  activeControl: {
    backgroundColor: theme.colors.green[0],
    color: theme.colors.green[6],
    '&:hover': {
      backgroundColor: theme.colors.green[0],
      color: theme.colors.green[8],
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));

export function NavLinksGroup({ icon: Icon, label, link, initiallyOpened, links }) {
  const { classes, theme } = useStyles();
  const pathname = window.location.pathname;

  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;
  const items = (hasLinks ? links : []).map((link) => {
    return (
      <Link to={link.link} key={link.label} className={`${link.link === pathname}`}>
        {link.label}
      </Link>
    );
  });

  return (
    <>
      {link ? (
        <Link
          to={link}
          className={`${classes.control} ${link === pathname && classes.activeControl}`}
        >
          <Group position="apart" spacing={0}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ThemeIcon size={30}>
                <Icon size="1.1rem" />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Box>
          </Group>
        </Link>
      ) : (
        <UnstyledButton
          onClick={() => {
            if (hasLinks) {
              setOpened((o) => !o);
              return;
            }
          }}
          className={classes.control}
        >
          <Group position="apart" spacing={0}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ThemeIcon variant="default" size={30}>
                <Icon size="1.1rem" />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Box>
            {hasLinks && (
              <ChevronIcon
                className={classes.chevron}
                size="1rem"
                stroke={1.5}
                style={{
                  transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
                }}
              />
            )}
          </Group>
        </UnstyledButton>
      )}
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

NavLinksGroup.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  initiallyOpened: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};
