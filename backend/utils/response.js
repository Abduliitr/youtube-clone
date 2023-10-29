export const createResponse = (message, token, success = true) => {
    return {
        message,
        token,
        success
    };
}

export const createErrorResponse = (error, success = false) => {
    return {
        errorMessage: error.message,
        errorCode: error.errorCode,
        success
    };
}