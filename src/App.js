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
import { Link } from "react-router-dom";
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
      .post("http://localhost:8000/subscribers", subForm)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/blogs")
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
                    <h1>
                      <Link
                        style={{
                          textDecoration: "none",
                          color: color ? "black" : "white",
                        }}
                        to={`/posts/${item.id}`}
                      >
                        {item.title}
                      </Link>
                    </h1>
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
            style={{
              paddingTop: 30,
              color: color ? "black" : "white",
            }}
          >

          </div>
        </div>
        <Button
          style={{ position: "fixed", backgroundColor: "#75d18e", right: 0 }}
        >
          <Link to="/admin" style={{ textDecoration: "none", color: "black" }}>
            Admin
          </Link>
        </Button>
      </Container>
    </div>
  );
}

export default App;
