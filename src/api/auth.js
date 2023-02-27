// 675021322441-o4oicft2gjtcm1tl79ve8r24jaul9cd7.apps.googleusercontent.com

let initialized = false;
const clientId =
    '675021322441-o4oicft2gjtcm1tl79ve8r24jaul9cd7.apps.googleusercontent.com';

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
                    console.log(response);
                },
                scope: 'email profile',
            });

            resolve();
            initialized = true;
        });
    });
};