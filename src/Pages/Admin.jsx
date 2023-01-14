import { Container, Heading, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import appConfig from "../../config/appConfig";
import useAdminFetch from "../Hooks/useAdminFetch";

export default function Admin() {
    const { loading, data: stats, error } = useAdminFetch(`${appConfig.adminUrl}/stats`);

    if (loading) return <Spinner />;
    if (error) return <Heading>{error.message}</Heading>;
    return (
        <Container>
            <Heading>Admin</Heading>
            {stats.map((s) => {
                return (
                    <>
                        <Text fontWeight={600}>
                            {s.published ? "Published Blogs" : "Un-Published Blogs"}
                        </Text>
                        <Text>{s.total}</Text>
                    </>
                );
            })}
        </Container>
    );
}
