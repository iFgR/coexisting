const initialState = { status: '' };

export const statusReducer = (state = initialState, action) => {
    
    const status = action.payload;

    switch (action.type) {
        case 'CHANGE_STATUS':
            return Object.assign({}, state, { status });
        default:
            return state;
    }
};