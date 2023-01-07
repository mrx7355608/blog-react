import { useEffect, useState } from "react";

export default function useSearch() {
    const [searchTerm, setSearch] = useState("");
    const [debounce, setDebounce] = useState(searchTerm);

    // Debounce
    useEffect(() => {
        const timeout = setTimeout(() => setSearch(debounce), 1000);
        return () => clearTimeout(timeout);
    }, [debounce]);

    return { searchTerm, setDebounce };
}
