import React from "react";

function ProfileCard(props) {
  var cardStyles = {
    border: "1px solid gray",
    padding: "20px",
    borderRadius: "4px",
    margin: "30px 0"
  };
  var imageStyles = {
    width: "50px",
    height: "auto"
  };
  return (
    <div style={cardStyles}>
      <img src={props.image} alt="" style={imageStyles} />
      <p>
        <strong>{props.username}</strong>
      </p>
      <p>{props.name}</p>
    </div>
  );
}

export default ProfileCard;
