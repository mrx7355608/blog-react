import {
    Heading,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    HStack,
    Text,
    Flex,
    ButtonGroup,
    Box
} from "@chakra-ui/react";

export default function BlogsAdminPage() {
    return (
        <Flex direction="column" p="6" align="center">
            <Flex justify="space-between" alignItems="center" w="full">
                <Heading>Blogs</Heading>
                <Button colorScheme="red" variant="solid">
                    Add new blog
                </Button>
            </Flex>
            <Flex direction="column">
                <Card p="5" bg="white" rounded="md" shadow="sm">
                    <Text fontWeight="700" fontSize="3xl" mb="0">
                        Blog - 1
                    </Text>
                    <Text fontSize="lg" mb="6">
                        Todays lecture is about useReducer and Context API. This is one of my most
                        favourite combinations in react. Its like a mini redux
                    </Text>
                    <HStack justify="space-between">
                        <ButtonGroup>
                            <Button colorScheme="yellow">Edit</Button>
                            <Button colorScheme="blue">Publish</Button>
                            <Button colorScheme="orange">Un publish</Button>
                            <Button colorScheme="red">Delete</Button>
                        </ButtonGroup>
                        <Box>
                            <Text as="span" fontWeight="700" color="gray.600">
                                11/02/2022
                            </Text>
                            <Text
                                as="span"
                                ml="4"
                                rounded="full"
                                px="3"
                                py="1"
                                bg="green.100"
                                color="green.500"
                                fontWeight="700"
                                pt="1.5">
                                Published
                            </Text>
                        </Box>
                    </HStack>
                </Card>
            </Flex>
        </Flex>
    );
}
