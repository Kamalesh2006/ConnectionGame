import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';

export default function HomePage({ username, onLogout }) {
  return (
    <Flex direction="column" minH="100vh" align="center" justify="center" gap={6}>
      <Heading size="2xl">Welcome{username ? `, ${username}` : ''}!</Heading>
      <Text color="gray.600">You are now in the game lobby.</Text>
      {onLogout && (
        <Button onClick={onLogout} variant="outline">Log out</Button>
      )}
    </Flex>
  );
}
