import appConfig from "../../config/appConfig";

class BlogServices {
    async publish(id) {
        const url = `${appConfig.adminUrl}/blogs/publish/${id}`;
        const response = await fetch(url, {
            method: "PATCH",
            credentials: "include"
        });
        const result = await response.json();
        return { response, result };
    }
    async unpublish(id) {
        const url = `${appConfig.adminUrl}/blogs/un-publish/${id}`;
        const response = await fetch(url, {
            method: "PATCH",
            credentials: "include"
        });
        const result = await response.json();
        return { response, result };
    }
    async delete() {}
}

export default BlogServices;
