export namespace API {
    const endpoint: String = process.env.ENDPOINT;

    export const get = async <T>(url: string) => {
        try {
            const result = await fetch(`${endpoint}/${url}`);
            const data: T = await result.json();
            return data;
        }
        catch (e) {
            console.error(e);
        }
    }
}

