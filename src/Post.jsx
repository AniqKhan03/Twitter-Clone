import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import UploadIcon from "@mui/icons-material/Upload";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="Post" ref={ref}>
        <div className="post__avatar">
          <Avatar>{avatar}</Avatar>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__header--text">
              <h3>
                {displayName}{" "}
                <span className="post__header--special">
                  {verified && <VerifiedIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__header--description">
              <p>{text} </p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <UploadIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
