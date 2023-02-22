const initialState = {
    authenticated: false,
    user: {
        firstName: 'Twix',
        lastName: 'the Parrot',
    }
}
export const authReducer = (state = initialState, action) => {
    const { type } = action;

    return state;
}