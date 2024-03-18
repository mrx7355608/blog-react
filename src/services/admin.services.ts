import { IApiResponse } from "../types/api";

interface IUser {
    username: string;
    name: string;
}
export async function loginAdmin(creds: {
    username: string;
    password: string;
}): Promise<IApiResponse<string>> {
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

export async function logoutAdmin(): Promise<IApiResponse<string>> {
    const url = "http://localhost:8000/api/auth/logout";
    const options: RequestInit = {
        method: "POST",
        credentials: "include",
    };
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
}

export async function getAdmin(): Promise<IApiResponse<IUser>> {
    const url = "http://localhost:8000/api/user";
    const options: RequestInit = {
        method: "GET",
        credentials: "include",
    };
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
}
