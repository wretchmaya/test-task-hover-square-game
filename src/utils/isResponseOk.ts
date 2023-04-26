export const isResponseOk = (response: Response) => {
    return response.status >= 200 && response.status < 300;
};
