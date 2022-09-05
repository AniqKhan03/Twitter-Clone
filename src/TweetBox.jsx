import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    
    async function addTweet() {
        const docRef = await addDoc(collection(db, "posts"), {
        displayName: "Aniq Khan",
        username: "AniqAK",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: "A",
      });
      console.log("Document written with ID: ", docRef.id);
    }

    addTweet()

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="TweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar>A</Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          type="text"
          placeholder="Enter Image URL"
          className="tweetBox__imageInput"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetbox__button"
          variant="outlined"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
