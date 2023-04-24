import React, { useEffect, useState } from "react";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

export default function Posts() {
  /*const posts = [
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
*/

  const [posts, setPosts] = useState([]);
  useEffect(() =>{
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy(("timestamp"), "desc")), (snapshot) =>{
        setPosts(snapshot.docs)
      }
    );
    return unsubscribe;
  })

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}
