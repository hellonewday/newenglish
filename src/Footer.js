import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
export default function Footer({ color }) {
  return (
    <div
      className="footer"
      style={{
        textAlign: "center",
        padding: 6,
        backgroundColor: color ? "#282c35" : "white",
        color: color ? "white" : "black",
      }}
    >
      <p>New English 2020</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          color: color ? "white" : "black",
        }}
      >
        <a
          className="link-route"
          style={{ color: color ? "white" : "black" }}
          href="https://github.com/hellonewday/newenglish"
          aria-hidden="true"
          alt="link"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://facebook.com/maximusss1"
          className="link-route"
          style={{ color: color ? "white" : "black" }}
          aria-hidden="true"
          alt="link"
        >
          <FacebookIcon />
        </a>
        <a
          className="link-route"
          style={{ color: color ? "white" : "black" }}
          href="https://www.youtube.com/channel/UC6kMfrq-k7Jb-S398t-Ho-Q"
          aria-hidden="true"
          alt="link"
        >
          <YouTubeIcon />
        </a>
      </div>
    </div>
  );
}
