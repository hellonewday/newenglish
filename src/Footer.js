import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

export default function Footer() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: 10,
      }}
    >
      <p>New English 2020</p>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <a
          href="https://github.com/hellonewday/newenglish"
          aria-hidden="true"
          alt="link"
        >
          <GitHubIcon />
        </a>

        <a href="https://facebook.com/maximusss1" aria-hidden="true" alt="link">
          <FacebookIcon />
        </a>
      </div>
    </div>
  );
}
