import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import TeamList from '../TeamList/TeamList';


const Home = () => {
    const[Teams,setTeams]=useState([]);
    useEffect(()=>{
        const url='https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTeams(data.teams));
    },[])
    return (
        <div>
            <Header></Header>
           
           {
               Teams.map(teams=><TeamList team={teams}></TeamList>)
           }
            
        </div>
    );
};

export default Home;