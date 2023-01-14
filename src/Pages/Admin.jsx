import { Container, Heading, Spinner, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import appConfig from "../../config/appConfig";

export default function Admin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [stats, setStats] = useState([]);

    useEffect(() => {
        const url = `${appConfig.adminUrl}/stats`;
        const options = {
            method: "GET",
            mode: "cors",
            credentials: "include"
        };
        (async function () {
            setLoading(true);
            const response = await fetch(url, options);
            const result = await response.json();
            if (!response.ok) setError({ message: result.error });
            setLoading(false);
            setStats(result);
        })();
    }, []);

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
