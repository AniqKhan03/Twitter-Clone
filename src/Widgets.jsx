import React from "react";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="Widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1508838714180612100"} />

        <TwitterTimelineEmbed
          // autoHeight
          noScrollbar
          onLoad={function noRefCheck() {}}
          options={{
            height: 400,
          }}
          screenName="Firebase"
          sourceType="profile"
          tweetLimit={4}
        />
      </div>
    </div>
  );
}

export default Widgets;
