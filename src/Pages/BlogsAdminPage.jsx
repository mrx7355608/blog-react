import {
    Heading,
    Card,
    Button,
    HStack,
    Text,
    Flex,
    ButtonGroup,
    Box,
    Spinner,
    useToast
} from "@chakra-ui/react";
import appConfig from "../../config/appConfig";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogsAdminPage() {
    const [changes, setChanges] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const toast = useToast({
        variant: "left-accent",
        isClosable: true,
        duration: 5000,
        position: "top-right"
    });

    const showToast = (message, type) => {
        return toast({
            title: message,
            status: type
        });
    };

    const publish = async (id) => {
        const url = `${appConfig.adminUrl}/blogs/publish/${id}`;
        const response = await fetch(url, {
            method: "PATCH",
            credentials: "include"
        });
        const result = await response.json();
        if (!response.ok) return showToast(result.error, "error");
        showToast(result.message, "success");
    };
    const unpublish = async (id) => {
        const url = `${appConfig.adminUrl}/blogs/un-publish/${id}`;
        const response = await fetch(url, {
            method: "PATCH",
            credentials: "include"
        });
        const result = await response.json();
        if (!response.ok) return showToast(result.error, "error");
        showToast(result.message, "success");
    };
    // const edit = async (id) => {};
    // const del = async (id) => {};

    useEffect(() => {
        if (!changes) return;
        const url = `${appConfig.adminUrl}/blogs`;
        (async function () {
            try {
                const response = await fetch(url, {
                    mode: "cors",
                    credentials: "include"
                });
                const result = await response.json();
                setLoading(false);
                if (!response.ok) return setError({ message: response.error });
                setData(result);
                setChanges(false);
            } catch (err) {
                setLoading(false);
                setError(err);
            }
        })();
    }, [changes]);

    if (loading) return <Spinner />;

    if (error) {
        return <Heading>{error.message}</Heading>;
    }

    return (
        <Flex direction="column" p="6" align="center">
            <Flex mb="9" justify="space-between" alignItems="center" w="full">
                <Heading>Blogs</Heading>
                <Link to="create">
                    <Button colorScheme="red" variant="solid">
                        Add new blog
                    </Button>
                </Link>
            </Flex>
            <Flex maxW={"800px"} gap="4" direction="column">
                {data.map((blog) => {
                    return (
                        <Card key={blog._id} p="5" rounded="md" shadow="sm">
                            <Text fontWeight="700" fontSize="3xl" mb="0">
                                {blog.title}
                            </Text>
                            <Text fontSize="lg" mb="6">
                                {blog.body.substring(0, 300)}...
                            </Text>
                            <HStack justify="space-between">
                                <ButtonGroup>
                                    <Button size="sm" colorScheme="yellow">
                                        Edit
                                    </Button>
                                    <Button
                                        onClick={async () => {
                                            await publish(blog._id);
                                            setChanges(true);
                                        }}
                                        size="sm"
                                        colorScheme="blue">
                                        Publish
                                    </Button>
                                    <Button
                                        onClick={async () => {
                                            await unpublish(blog._id);
                                            setChanges(true);
                                        }}
                                        size="sm"
                                        colorScheme="orange">
                                        Un publish
                                    </Button>
                                    <Button size="sm" colorScheme="red">
                                        Delete
                                    </Button>
                                </ButtonGroup>
                                <Box>
                                    <Text as="span" fontWeight="700">
                                        {new Date(blog.createdAt).toDateString()}
                                    </Text>
                                    {blog.published ? (
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
                                    ) : (
                                        <Text
                                            as="span"
                                            ml="4"
                                            rounded="full"
                                            px="3"
                                            py="1"
                                            bg="red.100"
                                            color="red.500"
                                            fontWeight="700"
                                            pt="1.5">
                                            Not Published
                                        </Text>
                                    )}
                                </Box>
                            </HStack>
                        </Card>
                    );
                })}
            </Flex>
        </Flex>
    );
}
