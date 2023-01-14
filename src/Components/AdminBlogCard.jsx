import { Card, Button, HStack, Text, ButtonGroup, Box, useToast } from "@chakra-ui/react";
import BlogServices from "../Services/blog.services";
import { Link } from "react-router-dom";

export function AdminBlogCard({ blog, setChanges }) {
    const blogServices = new BlogServices();
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
        const { response, result } = await blogServices.publish(id);
        if (!response.ok) return showToast(result.error, "error");
        showToast(result.message, "success");
    };
    const unpublish = async (id) => {
        const { response, result } = await blogServices.unpublish(id);
        if (!response.ok) return showToast(result.error, "error");
        showToast(result.message, "success");
    };
    return (
        <Card p="5" rounded="md" shadow="sm">
            <Text fontWeight="700" fontSize="3xl" mb="0">
                {blog.title}
            </Text>
            <Text fontSize="lg" mb="6">
                {blog.body.substring(0, 300)}...
            </Text>
            <HStack justify="space-between">
                <ButtonGroup>
                    <Link to={"edit/" + blog._id}>
                        <Button size="sm" colorScheme="yellow">
                            Edit
                        </Button>
                    </Link>
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
}
