import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from '../layouts';
import { client as usersApi } from './../api/users';



export const Home = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const number = useSelector((state) => {
    return state.counter;
  })

  useEffect(() => {
    usersApi.get('/users').then((response) => {
      const { data } = response;

      setUsers(data);
    });
  }, [setUsers]);

  return (
    <Layout>
      <div className="mx-auto px-4 container">Home: {JSON.stringify(users)}
      <p className="mt-6">{number}</p>

        <div>
        <button onClick={()=>{
          dispatch({
            type:'increment'
          });
        }} className="bg-fuchsia-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">+</button>

        <button onClick={()=>{   
          dispatch({
            type:'decrement'
          });}} className="bg-fuchsia-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">-</button>
        </div>
      </div>
    </Layout>
  );
};