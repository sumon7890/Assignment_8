/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { faFlag, faFutbol } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import WcIcon from "@material-ui/icons/Wc";
import React from "react";
import imgFeMale from "../../img/female.png";
import imgMale from "../../img/male.png";
import "./TeamDetails.css";

const TeamDetails = (props) => {
  const { strCountry, strGender, strStadiumDescription, strDescriptionEN } =
    props.team;
  // console.log(imgMale)

  let imgpath ;
  if(strGender === "Male"){
    imgpath = imgMale
  } else  {
    imgpath = imgFeMale 
  }



  return (
    <div className="TeamDetails_wapper">
      <div className="container">
        <div className="row daynamicData">
          <div className="col-md-8">
            <h1> Premier League </h1>
            <h5>
              {" "}
              <FontAwesomeIcon icon={faFlag} /> Coutry: {strCountry}{" "}
            </h5>
            <h5>
              {" "}
              <FontAwesomeIcon icon={faFutbol} /> Sports Type: Football{" "}
            </h5>
            <h5>
              {" "}
              <WcIcon /> Gender : {strGender}{" "}
            </h5>
          </div>
          <div className="col-md-4">
            <div className="ImageOutlined">
              <img src={imgpath} alt="" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <p>{strStadiumDescription}</p>
          <br />
          <br />
          <br />
          <p>{strDescriptionEN}</p>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <a href="#">
              {" "}
              <FacebookIcon className="Icon" />
            </a>
            <a href="#">
              {" "}
              <TwitterIcon className="Icon" />
            </a>
            <a href="#">
              <InstagramIcon className="Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
