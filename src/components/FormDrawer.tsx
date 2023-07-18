import {
  Box,
  Button,
  Drawer,
  Grid,
  Group,
  Select,
  Slider,
  Switch,
  Text,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

export const FormDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState(40);
  const [endValue, setEndValue] = useState(40);
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      city: '',
      state: '',
    },
  });

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        title="User Form"
        size="xl"
        overlayProps={{ opacity: 0.5, blur: 4 }}
      >
        <Grid>
          <Grid.Col sm={6}>
            <TextInput
              placeholder="Your name"
              label="First Name"
              withAsterisk
              {...form.getInputProps('firstName')}
            />
          </Grid.Col>
          <Grid.Col sm={6}>
            <TextInput
              placeholder="Your name"
              label="Last Name"
              withAsterisk
              {...form.getInputProps('lastName')}
            />
          </Grid.Col>
          <Grid.Col sm={6}>
            <TextInput
              placeholder="Your city"
              label="City"
              withAsterisk
              {...form.getInputProps('city')}
            />
          </Grid.Col>
          <Grid.Col sm={6}>
            <TextInput
              placeholder="Your state"
              label="State"
              withAsterisk
              {...form.getInputProps('state')}
            />
          </Grid.Col>
          <Grid.Col sm={12}>
            <TextInput placeholder="Your address" label="Address" withAsterisk />
          </Grid.Col>
          <Grid.Col sm={12}>
            <Select
              label="Your favorite framework/library"
              placeholder="Pick one"
              data={[
                { value: 'react', label: 'React' },
                { value: 'ng', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' },
                { value: 'vue', label: 'Vue' },
              ]}
            />
          </Grid.Col>
          <Grid.Col sm={12}>
            <Textarea placeholder="About myself" label="Bio" />
          </Grid.Col>
          <Grid.Col sm={12}>
            <Title size={13} weight={600}>
              Work Time
            </Title>
            <Box maw={'100%'} mx="auto">
              <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />
              <Text mt="md" size="sm">
                onChange value: <b>{value}%</b>
              </Text>
              <Text mt={5} size="sm">
                onChangeEnd value: <b>{endValue}%</b>
              </Text>
            </Box>
          </Grid.Col>
          <Grid.Col sm={12}>
            <Textarea placeholder="Write description" label="Description" />
            <Switch label="I agree to sell my house" mt={15} />
          </Grid.Col>
          <Grid.Col sm={6}>
            <Button w="100%" variant="outline" onClick={close}>
              Close
            </Button>
          </Grid.Col>
          <Grid.Col sm={6}>
            <Button w="100%" onClick={() => console.log(form.values)}>
              Save
            </Button>
          </Grid.Col>
        </Grid>
      </Drawer>

      <Group position="center">
        <Button variant="outline" onClick={open}>
          Add New
        </Button>
      </Group>
    </>
  );
};
