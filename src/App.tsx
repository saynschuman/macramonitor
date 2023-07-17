import { AppShell, Burger, Container, Footer, MediaQuery, Text } from '@mantine/core';
import { useState } from 'react';
import { navLinks } from './navlinks';
import { Navbar } from './layout/Navbar';
import { AdminHeader } from './layout/AdminHeader';

export default function DashboardLayout() {
  const [opened, setOpened] = useState(true);

  return (
    <AppShell
      layout="alt"
      sx={(theme) => ({
        main: {
          backgroundColor: theme.colors.gray[0],
        },
      })}
      navbar={
        opened ? (
          <Navbar
            data={navLinks}
            hidden={!opened}
            burger={
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger opened={false} onClick={() => setOpened((o) => !o)} size="sm" mr="xl" />
              </MediaQuery>
            }
          />
        ) : (
          <></>
        )
      }
      navbarOffsetBreakpoint="sm"
      header={
        <AdminHeader
          burger={<Burger opened={false} onClick={() => setOpened((o) => !o)} size="sm" mr="xl" />}
        />
      }
      footer={
        <Footer height={50} p="md">
          <Text w="full" size="sm" align="center" color="gray">
            © 2023
          </Text>
        </Footer>
      }
    >
      <Container fluid>hello</Container>
    </AppShell>
  );
}
