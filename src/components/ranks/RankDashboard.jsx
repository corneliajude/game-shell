import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readUser } from '../../store/actions/users/usersActions';
import { StatsList } from '../stats';

export const RankDashboard = ({ userId }) => {
    // busy, setBusy useState
    const dispatch = useDispatch();
    const user = useSelector(({ users }) => {
        return users.entities[userId];
    });

    useEffect(() => {
        // setBusy

        // await
        dispatch(readUser(userId));
        // setBusy
    }, [dispatch, userId]);

    if (!user) {
        return <>...loading</>;
    }

    const { gamesLost, gamesPlayed, gamesWon } = user.stats;

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