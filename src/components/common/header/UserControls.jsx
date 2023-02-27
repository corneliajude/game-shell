import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { Button } from '../ui';
import { FaUserAstronaut } from 'react-icons/fa';
import { GoogleLogin } from '../../auth';

export const UserControls = () => {
    const authenticated = useSelector(({ auth }) => {
        return auth.authenticated;
    });

    const dispatch = useDispatch();

    return <>
        {authenticated === true ? <div className="flex gap-2">
            <Link to="/profile" title="Profile">
                <Button element='span'>
                    <FaUserAstronaut size={16}></FaUserAstronaut>
                </Button>
            </Link>

            <Button title="Log Out" type="button" skin="primaryInverted" onClick={() => {
                dispatch({ type: 'auth/logOut', });
            }}>Log Out</Button>
        </div>
            : (<GoogleLogin></GoogleLogin>)}
    </>;
};