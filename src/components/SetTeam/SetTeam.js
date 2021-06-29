/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamDetails from "../TeamDetails/TeamDetails";
import './setTeam.css';

const SetTeam = () => {
  const { id } = useParams();
  const [teamDetails, setTeamDetails] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeamDetails(data.teams));
  }, [id]);

  return (
    <div className="container setTem">
      <div className="row">
        
        {teamDetails.map((team) => (
          <TeamDetails team={team}> </TeamDetails>
        ))}
      </div>{" "}
    </div>
  );
};

export default SetTeam;
