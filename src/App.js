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
    console.log(subForm);
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
    <div
      style={{ height: "100vh", backgroundColor: color ? "white" : "black" }}
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
                  <div>
                    <h1>{item.title}</h1>
                    <p>{item.created_at}</p>
                  </div>
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
  );
}

export default App;
