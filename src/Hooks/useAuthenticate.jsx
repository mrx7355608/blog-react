import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import appConfig from "../../config/appConfig";

export default function useAuthenticate() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = `${appConfig.adminUrl}/`;
        const options = {
            mode: "cors",
            credentials: "include"
        };

        (async function () {
            try {
                const resp = await fetch(url, options);
                const result = await resp.json();
                setLoading(false);
                if (!resp.ok) return setError({ message: result.error });
                return setUser(result);
            } catch (err) {
                setLoading(false);
                setError(err);
            }
        })();
    }, []);

    return { loading, user, error };
}
