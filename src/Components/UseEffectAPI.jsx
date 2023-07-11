import React, { useEffect, useState } from 'react'
import Loading from './Github/loading';
import GithubUsers from './Github/GithubUsers';

function UseEffectAPI() {
  
   const [users , setUsers] = useState([]);
    const [ errors, setErrors] = useState("");
   const [loading , setLoading] = useState(true);
  const getUsers = async ()=>{
    try{
      
      const response = await fetch('https://api.github.com/users');
      setLoading(false);
      setUsers(await response.json());
    }catch(error)
    {
           setLoading(false);
           setErrors(error.message);
    }


  }

  useEffect(()=>{
    getUsers();
  },[])
     
  if(loading)
  {
    return <Loading></Loading>
  }
  return (
    <div>
      {errors !== "" && <h2> {errors} </h2>}
       
        <GithubUsers users={users} ></GithubUsers>
       
    </div>
  )
}

export default UseEffectAPI