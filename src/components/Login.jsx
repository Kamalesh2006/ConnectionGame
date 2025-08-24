import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useDisclosure,
  Divider,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

export function Login({ onGuest, onEmail }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const [showEmailForm, setShowEmailForm] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleOpen = () => {
    setShowEmailForm(false);
    setEmail('');
    setPassword('');
    onOpen();
  };

  const handleClose = () => {
    setShowEmailForm(false);
    setEmail('');
    setPassword('');
    onClose();
  };

  return (
    <div>
  <Button colorScheme="blue" onClick={handleOpen}>
        Login
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        initialFocusRef={initialRef}
        motionPreset="scale"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!showEmailForm ? (
              <Stack gap={4}>
                <Button colorScheme="blue" onClick={() => { onGuest && onGuest(); handleClose(); }}>
                  Continue as Guest
                </Button>
                <Divider />
                <Alert status="info" variant="left-accent" borderRadius="md">
                  <AlertIcon />
                  <Stack spacing={1}>
                    <AlertTitle>Why continue with email?</AlertTitle>
                    <AlertDescription>
                      <Text>• Create a team</Text>
                      <Text>• Invite others to join</Text>
                      <Text>• Manage your team</Text>
                    </AlertDescription>
                  </Stack>
                </Alert>
                <Button colorScheme="green" variant="solid" onClick={() => setShowEmailForm(true)}>
                  Continue with Email
                </Button>
              </Stack>
            ) : (
              <Stack as="form" gap={3} onSubmit={(e) => { e.preventDefault(); onEmail && onEmail(email, password); handleClose(); }}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    ref={initialRef}
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormControl>
                <Button type="submit" colorScheme="green">Continue</Button>
              </Stack>
            )}
          </ModalBody>
          <ModalFooter>
            {showEmailForm ? (
              <Stack direction="row" width="100%" justify="space-between">
                <Button variant="ghost" onClick={() => setShowEmailForm(false)}>
                  Back
                </Button>
                <Button variant="ghost" onClick={handleClose}>
                  Close
                </Button>
              </Stack>
            ) : (
              <Button variant="ghost" onClick={handleClose}>
                Close
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}