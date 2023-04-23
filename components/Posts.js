import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "formivale",
      userImg:
        "https://media.licdn.com/dms/image/D4D03AQHVEtsCODP-QQ/profile-displayphoto-shrink_800_800/0/1673711126433?e=2147483647&v=beta&t=zvyJRW9Z7JLgdxY98qiv6CG8ozrROcBGjrJGvua26Hc",
      img: "https://images.unsplash.com/photo-1682027888746-25b1af7bd47f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      caption: "Nice Picture",
    },
    {
      id: "2",
      username: "sarac",
      userImg:
        "https://media.licdn.com/dms/image/D4D03AQHVEtsCODP-QQ/profile-displayphoto-shrink_800_800/0/1673711126433?e=2147483647&v=beta&t=zvyJRW9Z7JLgdxY98qiv6CG8ozrROcBGjrJGvua26Hc",
      img: "https://images.unsplash.com/photo-1682027888746-25b1af7bd47f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      caption: "New Caption",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
        />
      ))}
    </div>
  );
}
