const initialState = {
    authenticated: false,
    user: {
        firstName: 'Astro',
        lastName: 'Astronaut',
    }
};
export const authReducer = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case 'auth/logOut':
            return {
                ...state,
                authenticated: false,
            };
        default:
            return state;
    }
};