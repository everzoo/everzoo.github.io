import { Anchor, Image, Center, Container, Flex, Group, Stack, Text, Title, Paper } from "@mantine/core";
import dayjs from "dayjs";

export default function App() {
  return (
    <Flex justify="center" h={"100%"} w={"100%"} ff="monospace" bg="#e0e9ac" c="black">
      <Center flex="grow">
        <Stack align="center" justify="center">
          <Title order={1} fz={60} ff="Righteous" style={{ "letter-spacing": "0.5rem" }} pb={100}>
            everzoo
          </Title>

          <Paper p="md" shadow="md">
            <Group>
              <Image
                display={"block"}
                w={"auto"}
                h={60}
                src="/sentinowl-logo.svg"
                alt="Sentinowl Logo"
              />

              <Stack gap={0}>
                <Title order={2} ff="monospace" fw="bold">
                  <Anchor c="black" td="underline" href="https://sentinowl.com">Sentinowl</Anchor>
                </Title>

                <Text>
                  Hardware monitoring made easy.
                </Text>
              </Stack>
            </Group>
          </Paper>
        </Stack>
      </Center>

      <Container maw={800} w={"100%"} pos="fixed" bottom={0} py="sm">
        <Group w={"100%"} gap="xs" justify="space-between">
          <Text>© {dayjs().year()} Everzoo Inc.</Text>

          <Text>Proudly Canadian  🇨🇦</Text>
        </Group>
      </Container>
    </Flex >
  )
}
