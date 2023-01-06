import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function About() {
    return (
        <Flex direction="column" justify="center" alignItems="center" minW="100vw" minH="80vh">
            <Container textAlign="center">
                <Heading mb="5" fontFamily="Rajdhani" textAlign="center">
                    About Me
                </Heading>
                <Text lineHeight={1.7} fontSize="lg" letterSpacing={0.8}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis illum
                    dolorem, est at minima sed quod accusantium quaerat? Quisquam consequuntur
                    suscipit unde quis nulla ex, ratione, qui iure eaque adipisci earum delectus
                    libero minima repudiandae maxime iusto commodi. Impedit, dignissimos!
                </Text>
            </Container>
        </Flex>
    );
}
