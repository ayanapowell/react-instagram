import React from "react";
import ProfileCard from "./ProfileCard";
import Stories from "./Stories";

var profile = {
  image:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
  username: "ayanapowell",
  name: "Ayana"
};

var stories = [
  {
    username: "lisahoneybee",
    timeAgo: "5 minutes"
  },
  {
    username: "kachoo",
    timeAgo: "10 hours"
  },
  {
    username: "kassalaholdsclaw",
    timeAgo: "12 hours"
  },
  {
    username: "sharlenmarie",
    timeAgo: "22 hours"
  }
];

function Sidebar() {
  return (
    <div>
      <ProfileCard
        image={profile.image}
        username={profile.username}
        name={profile.name}
      />
      <Stories stories={stories} />
    </div>
  );
}

export default Sidebar;
