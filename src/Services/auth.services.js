import appConfig from "../../config/appConfig";

class AuthServices {
    async login(creds) {
        try {
            const url = `${appConfig.adminUrl}/login`;
            const options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(creds),
                credentials: "include"
            };
            const response = await fetch(url, options);
            const result = await response.json();
            return { response, result, error: null };
        } catch (err) {
            return { response: null, result: null, error: err };
        }
    }
}

export default AuthServices;
