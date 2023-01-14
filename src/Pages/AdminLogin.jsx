import { Text, Button, Flex, Heading, Input, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import appConfig from "../../config/appConfig";
import AuthServices from "../Services/auth.services";

export default function AdminLogin() {
    const authServices = new AuthServices();
    const navigateTo = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [creds, setCreds] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCreds((prev) => ({ ...prev, [name]: value }));
    };

    const login = async () => {
        setLoading(true);
        const { response, result, error } = await authServices.login(creds);
        setLoading(false);
        if (error) return setError(error);
        if (!response.ok) return setError({ message: result.error });
        return navigateTo(`/${appConfig.clientAdminUrl}`);
    };

    return (
        <Flex minH="80vh" minW="700px" justify="center" alignItems="center">
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    await login();
                }}>
                <Heading fontSize="5xl" mb="5" fontFamily="Rajdhani">
                    Login
                </Heading>
                {error ? (
                    <Text mb="5" color="red.200" fontWeight="600">
                        {error.message}
                    </Text>
                ) : null}
                <Input
                    onChange={(e) => handleChange(e)}
                    mb="2"
                    type="email"
                    name="email"
                    placeholder="Email address"
                />
                <Input
                    onChange={(e) => handleChange(e)}
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                {loading ? (
                    <Button
                        disabled
                        w="full"
                        mt="5"
                        type="submit"
                        variant="outline"
                        colorScheme="red">
                        <Spinner />
                    </Button>
                ) : (
                    <Button w="full" mt="5" type="submit" variant="outline" colorScheme="red">
                        Login
                    </Button>
                )}
            </form>
        </Flex>
    );
}
