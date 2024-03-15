export interface IApiResponse<T> {
    ok: boolean;
    data: T;
    error?: string;
}
