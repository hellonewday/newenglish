import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  Switch,
  Divider,
  TextField,
  Button,
} from "@material-ui/core";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function App() {
  const [color, setColor] = useState(true);
  const [data, setData] = useState([]);
  const [subForm, setSubForm] = useState({});
  const handleColor = () => {
    setColor(!color);
  };
  const handleSubscribe = (e) => {
    setSubForm({ ...subForm, [e.target.name]: e.target.value });
  };

  const handleSubmitSub = (event) => {
    event.preventDefault();
    axios
      .post("https://blog-api-98.herokuapp.com/subscribers", subForm)
      .then((response) => {
        if (response.data.message === "Success") {
          alert("Thanks for the sub!");
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  useEffect(() => {
    axios
      .get("https://blog-api-98.herokuapp.com/blogs")
      .then((response) => {
        console.log(response.data.data);
        setData(
          response.data.data.filter((item) => {
            return item.genre === "English";
          })
        );
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>New English</title>
        <meta name="description" content={"Trang web học tiếng Anh"} />
      </Helmet>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: color ? "whitesmoke" : "#282c35",
          transition: "color 0.3s ease-out, background 0.3s ease-out",
        }}
      >
        <Container maxWidth="md">
          <div
            style={{
              paddingTop: 30,
              color: color ? "black" : "white",
            }}
          >
            <Grid
              container
              style={{ display: "flex", justifyContent: "space-between" }}
              alignItems="center"
              spacing={1}
              component="title"
            >
              <Grid item>
                <Typography variant="h3">
                  <b>New English!</b>
                </Typography>
                <Typography variant="h6">
                  Học tiếng Anh dành cho người mới cùng Maximusss
                </Typography>
              </Grid>
              <Grid>
                Dark
                <Switch
                  color={"secondary"}
                  checked={color}
                  onChange={handleColor}
                  name="color"
                />
                Light
              </Grid>
            </Grid>
            <Divider />
            <div className="data" style={{ paddingTop: 10 }}>
              {data.length > 0 ? (
                data.map((item) => {
                  return (
                    <article style={{ padding: 10 }}>
                      <header>
                        <Link
                          style={{ color: color ? "black" : "white" }}
                          className="link-route"
                          to={`/post/${item.id}`}
                        >
                          <h1>{item.title}</h1>
                        </Link>
                      </header>
                      <p>{item.description}</p>
                      <small>
                        {item.created_at} - {item.likes} interested
                      </small>
                    </article>
                  );
                })
              ) : (
                <h3 style={{ textAlign: "center" }}>
                  Chưa có nội dung nào ở đây
                </h3>
              )}
            </div>
            <Divider />
            <div
              className="subscribe"
              style={{ paddingTop: 10, textAlign: "center" }}
            >
              <h2>Subscribe to New English Blog</h2>
              <p>Receive latest news and posts from your mailbox.</p>
              <TextField
                label="Your name"
                name="name"
                type="text"
                style={{ backgroundColor: color ? "" : "white" }}
                variant="outlined"
                fullWidth
                onChange={handleSubscribe}
              />
              <br />
              <br />
              <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                style={{ backgroundColor: color ? "" : "white" }}
                fullWidth
                onChange={handleSubscribe}
              />
              <br />
              <br />
              <Button
                onClick={handleSubmitSub}
                color={color ? "primary" : "secondary"}
                fullWidth
                variant="contained"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Footer color={color} />
    </div>
  );
}

export default App;
