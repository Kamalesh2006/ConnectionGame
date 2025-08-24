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
} from '@chakra-ui/react';
export default function TeamJoin(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);

    return (
        <>
            <Button onClick={onOpen}>Join Team</Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                initialFocusRef={initialRef}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Join Team</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={4}>
                            <FormControl>
                                <FormLabel>Team ID</FormLabel>
                                <Input ref={initialRef} placeholder="Enter Team ID" />
                            </FormControl>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button colorScheme="blue" onClick={onClose}>Join</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}