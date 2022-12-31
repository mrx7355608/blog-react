import React from "react";
import { Container } from "@chakra-ui/react";
import Blog from "../Components/Blog";

export default function Home() {
    return (
        <Container maxW="700px" py="6">
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
        </Container>
    );
}
