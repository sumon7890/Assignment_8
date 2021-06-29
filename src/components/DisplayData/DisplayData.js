/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import Team from "../Team/Team";

const DisplayData = () => {
  const [team, setTeams] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {team.map((team) => (
          <div className="col-md-4">
            <Team key={team.idTeam} team={team}></Team>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayData;
