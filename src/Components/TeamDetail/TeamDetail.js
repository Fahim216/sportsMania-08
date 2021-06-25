import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import found from './found 1.png';
import twitter from './Twitter.png';
import facebook from './Facebook.png';
import youtube from './YouTube.png';
import imageMale from './male.png';
import imageFemale from './female.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFlag, faFutbol, faMars,faFacebook } from '@fortawesome/free-solid-svg-icons'

const TeamDetail = () => {
    const {idTeam}=useParams();
    const [team,setTeam]=useState({});
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTeam(data.teams[0]))
        console.log(team);
    
    
    
    },[idTeam])
    let gender=team.strGender;
    let Picture;
    if (gender==='Male'){
        Picture=<img style={{width:'300px',height:'257px'}} src={imageMale} alt=""/>
    }
    else {
        Picture=<img style={{width:'300px',height:'257px'}} src={imageFemale} alt=""/>
    }
    const {strTeamBanner,strStadiumThumb,strTeam,strSport,strGender,strCountry,intFormedYear,strDescriptionEN}=team;
   
    const backgroundImage ={
        width:'1440px',
        height:'500px',
        marginBottom:'40px',
        padding:'20px',
        backgroundImage:`url(${strStadiumThumb})`
    }
    


    return (
      <div className='background'>
          <div className='row'>
              <div style={backgroundImage} className='col-sm-auto col-xs-6 col-md-12'>
                  <div className='App team-logo-banner'>
                      
                      <img src={strTeamBanner} style={{width:'1200px',height:'151px'}}className='col-sm-auto col-xs-6 col-md-12'/>
                 
                 
                 
                  </div>
              </div>
          </div>
          <div className='card mb-3 bg-success pl-5'>
              <div className='row d-flex flex-row'>
                  <div className='team-details col-sm-12 col-md-6 col-lg'>
                      <h1>{strTeam}</h1>
                      <p><img style={{width:'35px',height:'35px'}} src={found} alt="" />{intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFlag}/> Country:<strong>{strCountry}</strong></p>
                    <p><FontAwesomeIcon icon={faMars}/>  Gender:<strong>{strGender}</strong></p>
                    <p><FontAwesomeIcon icon={faFutbol}/> SportsType:<strong>{strSport}</strong></p>
                 
                 
                  </div>
                  <div className='p-6 m-6 col-sm-12 col-md-6 col-lg '>
                      {Picture}
                     
                  </div>
              </div>
          </div>
          <div><p className='description'>
              {strDescriptionEN}</p></div>
              <div className='App icon'>
              <a href="https://twitter.com/"> <img style={{height:'50px',width:'50px'}} src={twitter} alt="" /></a>   
               <a href="https://facebook.com/"> <img style={{height:'50px',width:'50px'}} src={facebook} alt="" /></a> 
                <a href="https://youtube.com/"> <img style={{height:'50px',width:'50px'}} src={youtube} alt="" /></a> 

             
              </div>
      </div>
     
     
    );
};

export default TeamDetail;