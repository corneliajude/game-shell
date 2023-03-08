import { useSelector } from 'react-redux';
import { Creature, ProfileForm, UserProfile } from '../components/profile';
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

                        <section className="grid grid-cols-12 mb-4">
                            <div className="col-span-8">
                                <UserProfile></UserProfile>
                            </div>

                            <div className="col-span-4">
                                <Creature></Creature>
                            </div>
                        </section>

                        <section className="mt-4 lg:w-1/4 lg:mt-12 mx-auto">
                            <ProfileForm></ProfileForm>
                        </section>
                    </header>
                </div>
            </AuthorizedLayout>
        </Layout>
    );
};

