import { useToast } from "@chakra-ui/react";

export default function useShowToast() {
    const toast = useToast({
        position: "top-right",
        isClosable: true,
        duration: 5000,
        variant: "left-accent"
    });
    const showToast = (message, type) => {
        return toast({
            title: message,
            status: type
        });
    };
    return showToast;
}
