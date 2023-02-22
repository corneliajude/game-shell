import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FullscreenLayout } from '../layouts';

export const FourOhFour = () => {
  const dispatch = useDispatch();

  return (
    <FullscreenLayout>
      <div className="bg-fuchsia-400 w-screen h-screen flex items-center justify-center">
        <div className="text-center text-white flex flex-col space-y-4">
          <span className="text-7xl animate-pulse block">404</span>

          <Link to="/" title="Home" className="font-bold bg-fuchsia-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Home
          </Link>

          <button onClick={() => {
            dispatch({
              type: 'add',
              payload: 404,
            })
          }} className="bg-fuchsia-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Add 404 to state</button>
        </div>
      </div>
    </FullscreenLayout>
  );
};