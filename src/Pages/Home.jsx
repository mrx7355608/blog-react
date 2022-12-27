import React from "react";
import { Container } from "@chakra-ui/react";
import Blog from "../Components/Blog";

export default function Home() {
    return (
        <Container py="6">
            <Blog />
        </Container>
    );
}
