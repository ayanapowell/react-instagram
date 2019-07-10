import React from "react";
import PostItem from "./PostItem";

var posts = [
  {
    image:
      "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3370&q=80",
    username: "ayanapowell",
    caption: "Today is a good day"
  },
  {
    image:
      "https://images.unsplash.com/photo-1562709734-e584493dbdd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1294&q=80",
    username: "natalieoffduty",
    caption: "summer is here!"
  },
  {
    image:
      "https://images.unsplash.com/photo-1562694909-3d53309d5e14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    username: "kassalaholdsclaw",
    caption: "Gap is the best"
  }
];

function MainFeed() {
  return (
    <div>
      {posts.map((post, index) => (
        <PostItem
          image={post.image}
          username={post.username}
          caption={post.caption}
          id={index}
          key={index}
        />
      ))}
    </div>
  );
}

export default MainFeed;
