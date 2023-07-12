import React from 'react';
import { Grid } from '@mui/material';
import {
  WelcomeCard,
  BlogCard,
  Earnings,
  UserActivity,
  Overview,
  WeeklyStats,
  DailyActivities,
} from './dashboard1-components';

import PageContainer from '../../components/container/PageContainer';

const Dashboard1 = () => (
  // 2

  <PageContainer title="Analytical Dashboard" description="this is Analytical Dashboard">
    <Grid container spacing={0}>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={6}>
        <WelcomeCard />
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6} sm={6}>
            <Earnings />
          </Grid>
          <Grid item xs={12} lg={6} sm={6}>
            <UserActivity />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Overview />
      </Grid>
      
      {/* ------------------------- row 2 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <BlogCard />
      </Grid>
      <Grid item xs={12} lg={4}>
        <WeeklyStats />
      </Grid>
      <Grid item xs={12} lg={4}>
        <DailyActivities />
      </Grid>
    </Grid>
  </PageContainer>
);
export default Dashboard1;
