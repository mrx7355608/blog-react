import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    Button,
    useDisclosure,
    Input
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function MobileSearchBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                display={{ md: "none" }}
                size={{ base: "sm", md: "md" }}
                m="0"
                colorScheme="red"
                onClick={onOpen}>
                <FaSearch />
            </Button>

            <Modal size="sm" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay backdropFilter="blur(3px)" />
                <ModalContent>
                    <ModalBody>
                        <Input
                            _placeholder={{
                                color: "gray.700"
                            }}
                            placeholder="Magic of Context API with useReducer ... "
                            fontSize="md"
                            fontWeight="600"
                            mt="3"
                            border="0"
                            outline="0"
                            bg="gray.100"
                            size="lg"
                            mb="0"
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button w="full" colorScheme="red" variant="solid">
                            Search
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
