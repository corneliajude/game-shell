import { Link } from 'react-router-dom';
import { FullscreenLayout } from '../layouts';

export const FourOhFour = () => {
  return (
    <FullscreenLayout>
      <div className="bg-fuchsia-400 w-screen h-screen flex items-center justify-center">
        <div className="text-center text-white flex flex-col space-y-4">
          <span className="text-7xl animate-pulse block">404</span>

          <Link to="/" title="Home" className="font-bold bg-fuchsia-600 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
            Home
          </Link>
        </div>
      </div>
    </FullscreenLayout>
  );
};