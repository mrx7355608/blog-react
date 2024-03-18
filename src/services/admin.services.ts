export async function login(creds: { username: string; password: string }) {
    const url = `${import.meta.env.VITE_SERVER_URL}/api/auth/login`;
    const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(creds),
        headers: {
            "Content-type": "application/json",
        },
    });
    const result = await response.json();
    return result;
}
export async function logout() {}
export async function getAdmin() {}
