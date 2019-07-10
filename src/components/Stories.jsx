import React from "react";

function Stories(props) {
  var storiesStyle = {
    border: "1px solid gray",
    padding: "20px",
    borderRadius: "4px"
  };
  var storyStyles = {
    marginBottom: "20px"
  };
  return (
    <div style={storiesStyle}>
      <p>Stories:</p>
      <ul style={storyStyles} className="list-unstyled">
        {props.stories.map((story, index) => (
          <li id={index}>
            <strong>{story.username}</strong> <br /> {story.timeAgo} ago
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stories;
