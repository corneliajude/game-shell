import { useSelector } from "react-redux";
import { StatsList } from "../stats";

export const Dashbroard = () => {
    const { gamesPlayed, gamesWon, gamesLost } = useSelector(({ auth }) => {
        return auth.stats;
    });

    return (
        <>
            <StatsList
                played={gamesPlayed}
                won={gamesWon}
                lost={gamesLost}
            ></StatsList>
        </>
    );
};