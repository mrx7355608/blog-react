import qs from "query-string";

export const UrlQueryGenerator = ({ url, query }) => {
    // Parse url
    const parsedUrl = new URL(url);
    // creates an object from the query string of parsedUrl
    const queryObject = qs.parse(parsedUrl.search);

    const updateQueryValues = (newValue) => {
        if (query === "title") {
            if (queryObject.page) delete queryObject.page;
            if (!newValue) {
                delete queryObject.title;
                return qs.stringify(queryObject).replaceAll("%2C", ",");
            }
            // replace the old value with the new value
            queryObject.title = newValue;
            // return new query string
            return qs.stringify(queryObject).replaceAll("%2C", ",");
        }
        if (query === "page") {
            queryObject.page = newValue;
            return qs.stringify(queryObject).replaceAll("%2C", ",");
        }

        if (queryObject.page) delete queryObject.page;
        // Tags query
        // Check if newValues(its an array) contains values
        const isNotEmptyArr = newValue.length > 0;
        if (isNotEmptyArr) {
            // Join the values with a comma
            queryObject.tags = newValue.join(",");
            return qs.stringify(queryObject).replaceAll("%2C", ",");
        }
        // If the array is empty then,
        // delete the tags query from url query object
        delete queryObject.tags;
        return qs.stringify(queryObject);
    };

    const createNewQuery = (newValue) => {
        // add a new value to the query string using URLSearchParams method
        const sp = parsedUrl.searchParams;
        sp.append(query, newValue);
        if (query !== "page" && sp.has("page")) sp.delete("page");
        return sp.toString().replaceAll("%2C", ",");
    };

    const create = (newValue) => {
        const queryExists = queryObject[query];
        return queryExists ? updateQueryValues(newValue) : createNewQuery(newValue);
    };

    return { create };
};
