import appConfig from "../../config/appConfig";

class BlogServices {
    // Publish
    async publish(id) {
        try {
            const url = `${appConfig.adminUrl}/blogs/publish/${id}`;
            const response = await fetch(url, {
                method: "PATCH",
                credentials: "include"
            });
            const result = await response.json();
            return { response, result, error: null };
        } catch (err) {
            return { response: null, result: null, error: err };
        }
    }

    // Un publish
    async unpublish(id) {
        try {
            const url = `${appConfig.adminUrl}/blogs/un-publish/${id}`;
            const response = await fetch(url, {
                method: "PATCH",
                credentials: "include"
            });
            const result = await response.json();
            return { response, result, error: null };
        } catch (err) {
            return { response: null, result: null, error: err };
        }
    }

    // Create
    async create(data) {
        try {
            const url = `${appConfig.adminUrl}/blogs`;
            const options = {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data),
                credentials: "include"
            };
            const response = await fetch(url, options);
            const result = await response.json();
            return { response, result, error: null };
        } catch (err) {
            return { response: null, result: null, error: err };
        }
    }
    async delete() {}
}

export default BlogServices;
