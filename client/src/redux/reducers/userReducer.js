const data = [];

// eslint-disable-next-line
export default (info = data, action) => {
    switch (action.type) {
        case "CREATE_USER":
            return [...info, action.payload];
        case "LOGIN_USER":
            return [...info, action.payload];
        case "GET_USER_DATA":
            return [...info, action.payload];
        case "GET_INFO":
            return [...info, action.payload];
        case "GET_USER_DATA_FB":
            return [...info, action.payload];
        default:
            return info;
    }
}