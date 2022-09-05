import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import Twitter from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ArticleIcon from "@mui/icons-material/Article";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebar">
        <Twitter className="twitter__icon" />

        <SidebarOption active text="Home" Icon={HomeIcon} />
        <SidebarOption text="Explore" Icon={TagIcon} />
        <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
        <SidebarOption text="Messages" Icon={MailOutlineIcon} />
        <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
        <SidebarOption text="Lists" Icon={ArticleIcon} />
        <SidebarOption text="Profile" Icon={PersonOutlineIcon} />
        <SidebarOption text="More" Icon={MoreHorizIcon} />

        <Button className="sidebar__tweet" variant="outlined">
          Tweet
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
