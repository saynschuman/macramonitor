import { Button, Group, Text, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconCaretDown } from '@tabler/icons-react';
import { Accordion } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';

export const MultiLevelSelect = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [value, setValue] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        toggle();
      }
    };

    if (opened) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [opened]);

  const selectValue = (v) => {
    setValue(v);
    toggle();
  };

  return (
    <Box maw={400} mx="auto" sx={{ background: opened ? '#fff' : 'transparent' }} ref={ref}>
      <Group position="right" mb={5}>
        <Button variant="outline" onClick={toggle} rightIcon={<IconCaretDown />}>
          {value ?? 'Choose value'}
        </Button>
      </Group>

      <Collapse in={opened}>
        <Text>
          <Accordion radius="md" multiple>
            <Accordion.Item value="1">
              <Accordion.Control>Item 1</Accordion.Control>
              <Box sx={{ paddingLeft: 10 }}>
                <Accordion.Panel
                  sx={{ cursor: 'pointer' }}
                  onClick={() => selectValue('Sub item 1')}
                >
                  Sub item 1
                </Accordion.Panel>
                <Accordion.Panel
                  sx={{ cursor: 'pointer' }}
                  onClick={() => selectValue('Sub item 2')}
                >
                  Sub item 2
                </Accordion.Panel>
                <Accordion.Panel
                  sx={{ cursor: 'pointer' }}
                  onClick={() => selectValue('Sub item 3')}
                >
                  Sub item 3
                </Accordion.Panel>
              </Box>
            </Accordion.Item>
            <Accordion.Item value="2">
              <Accordion.Control>Item 2</Accordion.Control>
              <Box sx={{ paddingLeft: 10 }}>
                <Accordion.Panel
                  sx={{ cursor: 'pointer' }}
                  onClick={() => selectValue('Sub item 1')}
                >
                  Sub item 1
                </Accordion.Panel>
                <Accordion.Panel
                  sx={{ cursor: 'pointer' }}
                  onClick={() => selectValue('Sub item 2')}
                >
                  Sub item 2
                </Accordion.Panel>
                <Accordion.Panel
                  sx={{ cursor: 'pointer' }}
                  onClick={() => selectValue('Sub item 3')}
                >
                  Sub item 3
                </Accordion.Panel>
              </Box>
            </Accordion.Item>
          </Accordion>
        </Text>
      </Collapse>
    </Box>
  );
};
