import { useSelector } from "react-redux";
import { FcGlobe } from "react-icons/fc";


export const StatsList = () => {
    const stats = useSelector(({ auth }) => {
        return auth.stats;
    });

    const { gamesPlayed, gamesWon, gamesLost } = stats;

    return (
        <ul className="border rounded-md shadow">
            <li> <FcGlobe className="inline-block"></FcGlobe> Games Played: {gamesPlayed}</li>
            <li>Games Lost: {gamesLost}</li>
            <li>Games Won: {gamesWon}</li>
        </ul>
    );
};