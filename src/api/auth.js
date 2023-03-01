import jwtDecode from 'jwt-decode';
import {
    createUser,
    readUser,
    setUser,
    setUserStats,
} from '../store/actions/auth';
import store from './../store';
let initialized = false;
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const initializeGoogleAuth = async () => {
    return new Promise((resolve) => {
        if (initialized) {
            return;
        }

        window.addEventListener('load', () => {
            /* global google */
            google.accounts.id.initialize({
                client_id: clientId,
                callback: (response) => {
                    const {
                        given_name: firstName,
                        family_name: lastName,
                        email,
                        picture: avatar,
                        sub: id,
                        name,
                    } = jwtDecode(response.credential);

                    store.dispatch(
                        setUser({
                            firstName,
                            lastName,
                            email,
                            avatar,
                            id,
                            name,
                        }),
                    );

                    store
                        .dispatch(readUser(id))
                        .then(({ stats }) => {
                            // daca user exista - incarcam informatia in stare
                            store.dispatch(setUserStats(stats));
                        })
                        .catch(() => {
                            // daca user nu exista - creeam
                            store.dispatch(createUser(id));
                        });
                },
                scope: 'email profile',
            });

            resolve();
            initialized = true;
        });
    });
};