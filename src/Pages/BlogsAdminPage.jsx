import { Heading, Button, Flex, Spinner } from "@chakra-ui/react";
import { AdminBlogCard } from "../Components/AdminBlogCard";
import appConfig from "../../config/appConfig";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogsAdminPage() {
    const [changes, setChanges] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

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
                    return <AdminBlogCard key={blog._id} blog={blog} setChanges={setChanges} />;
                })}
            </Flex>
        </Flex>
    );
}
