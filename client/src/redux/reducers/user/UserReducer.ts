const initialState = {
    user: {
        id: '',
        username: '',
        email: '',
        role: ''
    }
};

export const UserReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'SET_SELECTED_FIRSTNAME':
            break;
        default:
            return state
    }
}