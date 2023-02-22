import { GiCardAceHearts } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="container mx-auto px-4 flex justify-between">
      <h1 className="uppercase font-bold text-lg inline-block">
        <Link to="/" title="Home" className="flex gap-3 items-center">
          <GiCardAceHearts size={36} className="inline-block  text-fuchsia-600"></GiCardAceHearts>
          Game Shell
        </Link>
      </h1>

      <div>controls</div>
    </div>
  );
};