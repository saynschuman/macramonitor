import { Flex, Grid } from '@mantine/core';
import { BalanceCard } from './BalanceCard';
import { OverviewCard } from './OverviewCard';
import { ProfileCard } from './ProfileCard';
import { WelcomeCard } from './WelcomeCard';

export function DashboardContent() {
  return (
    <Grid>
      <Grid.Col md={4} sm={12}>
        <ProfileCard />
      </Grid.Col>
      <Grid.Col md={8} sm={12}>
        <Flex direction="column" h="100%" justify="space-between">
          <WelcomeCard />
        </Flex>
      </Grid.Col>
      <Grid.Col md={8} sm={12}>
        <BalanceCard />
      </Grid.Col>
      <Grid.Col md={4} sm={12}>
        <OverviewCard />
      </Grid.Col>
    </Grid>
  );
}
