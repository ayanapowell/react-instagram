import React from "react";
import { Link } from "react-router-dom";

function PostItem(props) {
  var postStyles = {
    border: "1px solid gray",
    borderRadius: "4px",
    padding: "30px",
    margin: "30px"
  };
  var imageStyles = {
    width: "100%",
    height: "600px",
    objectFit: "cover"
  };
  return (
    <div style={postStyles}>
      <img src={props.image} alt="" style={imageStyles} />
      <p>
        <Link to={`user/${props.id}`}>
          <strong>{props.username}</strong>
        </Link>
        {" | "}
        {props.caption}
      </p>
    </div>
  );
}

export default PostItem;
