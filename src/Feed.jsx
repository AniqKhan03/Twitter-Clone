import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from './firebase'
import { collection, addDoc, getDocs, doc, getDoc, query, where, updateDoc, deleteDoc } from "firebase/firestore"
import FlipMove from "react-flip-move";

function Feed() {

  const [posts, setPosts]= useState([])
  

  useEffect(() => {

      async function getAllPosts() {
        const data = await getDocs(collection(db, "posts"))
        const posts = data.docs.map(doc => doc.data())
        setPosts(posts)
      }

      getAllPosts()
      
      // db.collection('posts').onSnapshot(snapshot => (
      //   setPosts(snapshot.docs.map(doc => doc.data()))
      // ))
  }, [posts])

  return (
    <div className="Feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
      {posts.map(post => (
        <Post
        key={post.text}

        displayName={post.displayName}
        verified = {post.verified}
        username={post.username}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
        />
      ))}
      </FlipMove>
      
      
      

    </div>
  );
}

export default Feed;
