export const createResponse = (message, token, success = true) => {
    return {
        message,
        token,
        success
    };
}

export const createErrorResponse = (error, success = false) => {
    return {
        message: error.message,
        success
    };
}