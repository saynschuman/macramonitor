import React, { useState } from 'react';
import { Grid, Paper, Space, Tabs, Title } from '@mantine/core';
import { Table1 } from './Table1';

export const ActionItems = () => {
  const [activeTab, setActiveTab] = useState('reportingEntities');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Paper withBorder radius="md" p="xl">
      <Grid justify="space-between">
        <Title order={3}>Action Items</Title>
      </Grid>
      <Space h="md" />
      <Tabs value={activeTab} onTabChange={handleTabChange}>
        <Tabs.List sx={{ marginBottom: 20 }}>
          <Tabs.Tab value="reportingEntities">Reporting Entities</Tabs.Tab>
          <Tabs.Tab value="componentDetails">Component Details</Tabs.Tab>
          <Tabs.Tab value="financialSummary">Financial Summary</Tabs.Tab>
          <Tabs.Tab value="financialDetails">Financial Details</Tabs.Tab>
          <Tabs.Tab value="tinComparisons">TIN Comparisons</Tabs.Tab>
          <Tabs.Tab value="tinSummary">TIN Summary</Tabs.Tab>
          <Tabs.Tab value="qppMismatch">QPP Mismatch</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="reportingEntities">
          <Table1 />
        </Tabs.Panel>
        <Tabs.Panel value="componentDetails">Component Details</Tabs.Panel>
        <Tabs.Panel value="financialSummary">Financial Summary</Tabs.Panel>
        <Tabs.Panel value="financialDetails">Financial Details</Tabs.Panel>
        <Tabs.Panel value="tinComparisons">TIN Comparisons</Tabs.Panel>
        <Tabs.Panel value="tinSummary">TIN Summary</Tabs.Panel>
        <Tabs.Panel value="qppMismatch">QPP Mismatch</Tabs.Panel>
      </Tabs>
    </Paper>
  );
};
