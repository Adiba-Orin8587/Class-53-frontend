import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const users = useLoaderData()
    console.log(users);

    return (
        <div>
            <h1>This is home page</h1>
            <div>
                {
                    users.map(user => <p className='text-black-200 text-2xl m-3' key={user._id}>Name:{user.name} ++ Email:{user.email} <button className='btn btn-outline btn-error btn-circle'>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Home;