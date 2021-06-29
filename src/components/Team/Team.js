import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Team.css";

// idTeam
const Team = (props) => {
  const { strTeam,idTeam, strLeague,strTeamBadge } = props.team;
  let history = useHistory();
  const exploreHandle = () => {
    history.push(`/team/${idTeam}`) 
  }
 
  return (
    <div className="card">
    <img src={strTeamBadge} alt="" srcset="" />
      <div className="card-body">
        <h1>{strTeam}</h1>
        <h5 className="card-title">{strLeague}</h5>


             <Button variant="contained" 
             onClick={exploreHandle}
               color="secondary"
            >   Explore <FontAwesomeIcon icon={faArrowRight} /> </Button>
  
      </div>
    </div>
  );
};

export default Team;
