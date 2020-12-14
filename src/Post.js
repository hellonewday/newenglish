import { Container } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

export function Post(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:8000/blogs/${props.match.params.id}`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  return (
    <div>
      <Container>
        <h1>{data.title}</h1>
        <h3>{data.description}</h3>
        <div>{parse(data.content || "")}</div>
        <div>
          <Link style={{ textDecoration: "none", color: "red" }} to="/">
            Go home
          </Link>
        </div>
      </Container>
    </div>
  );
}
