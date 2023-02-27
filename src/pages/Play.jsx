import { AuthorizedLayout, Layout } from '../layouts';


export const Play = () => {
    return (
        <Layout>
            <AuthorizedLayout>
                <div className="container mx-auto px-4">
                    <header>
                        <h1 className="text-3xl font-bold mt-4">Play</h1>
                    </header>
                </div>
            </AuthorizedLayout>
        </Layout>
    );
}

