import { GiOrbital } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { UserControls } from './UserControls';

export const Header = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between">
      <h1 className="uppercase font-bold text-lg inline-block">
        <Link to="/" title="Home" className="flex gap-3 items-center">
          <GiOrbital size={36} className="inline-block  text-fuchsia-600 hover:text-blue-600"></GiOrbital>
          Game Shell
        </Link>
      </h1>

      <div>
        <UserControls></UserControls>
      </div>
    </div >
  );
};