export interface ErrorLoginResponseT {
    message: string,
    status: number,
    response: {
        data: {
            errors: {
                email?: Array<string>,
                password?: Array<string>,
            },
        }
    }
}