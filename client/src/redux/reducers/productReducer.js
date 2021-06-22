const data = [];

// eslint-disable-next-line
export default (info = data, action) => {
    switch (action.type) {
        case 'CREATE_PRODUCT':
            return [...info, action.payload];
        case 'GET_PRODUCTS':
            return [...info, action.payload];
        default:
            return info;
    }
};
