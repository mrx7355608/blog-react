import React from "react";
import { Container } from "@chakra-ui/react";

import DesktopSearchbar from "../Components/DesktopSearchbar";
import BlogCard from "../Components/BlogCard";

export default function Home() {
    return (
        <Container maxW="700px" py="6">
            <DesktopSearchbar />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </Container>
    );
}
