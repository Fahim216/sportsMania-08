import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

const TeamList = (props) => {
  const { idTeam, strTeam, strSport, strTeamBadge, strGender } = props.team;
  const [gender,setGender]=useState('Female')
  const TeamStyle = {
    margin: "40px",
    padding: "20px",
    textAlign: "center",
    border: "1px solid white",
    display: "inline-block",
    backgroundColor: "silver",
    color: "purple",
    borderRadius: "15px"
  };

  return (
    <div style={TeamStyle}>
      <Card style={{ width: "19rem",backgroundColor: "silver"}}>
        <Card.Img variant="top" src={strTeamBadge} />
        <Card.Body>
          <Card.Title>
            <h2>{strTeam}</h2>
          </Card.Title>
          <Card.Text>
            <h6>
              Sports type:<strong>{strSport}</strong>
            </h6>
          </Card.Text>
          <p>
            <Link to={`/Team/${idTeam}`}>
              <Button onClick={()=>setGender(!gender)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Button>
            </Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TeamList;
