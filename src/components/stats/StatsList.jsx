import { FcBarChart, FcLike, FcDisapprove } from "react-icons/fc";


export const StatsList = ({ played = 0, won = 0, lost = 0 }) => {
    return (
        <ul className="border rounded-md shadow">
            <li className="mt-2 mb-2">
                <FcBarChart className="inline-block mx-2" fontSize={24}></FcBarChart>
                Played: {played}
            </li>
            <li className="mb-2">
                <FcDisapprove className="inline-block mx-2" fontSize={24}></FcDisapprove>
                Lost: {lost}
            </li>
            <li className="mb-2">
                <FcLike className="inline-block mx-2" fontSize={24}></FcLike>
                Won: {won}
            </li>
        </ul>
    );
};