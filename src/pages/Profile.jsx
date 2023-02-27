import { useSelector } from 'react-redux';
import { AuthorizedLayout } from '../layouts';
import { Layout } from '../layouts/Layout';

export const Profile = () => {
    // temporary selector
    const { firstName, lastName } = useSelector(({ auth }) => {
        const { user } = auth;
        const { firstName, lastName } = user;

        return {
            firstName,
            lastName
        };
    });




    return (
        <Layout>
            <AuthorizedLayout>
                <div className="container mx-auto px-4">
                    <header>
                        <h1 className="text-3xl font-bold mt-4">Profile</h1>
                        {firstName}
                        {lastName}
                    </header>
                </div>
            </AuthorizedLayout>
        </Layout>
    )
};

