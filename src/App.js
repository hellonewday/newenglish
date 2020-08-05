import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  Switch,
  Divider,
} from "@material-ui/core";
function App() {
  const [color, setColor] = useState(true);
  const [data, setData] = useState([]);
  const handleColor = () => {
    setColor(!color);
  };
  useEffect(() => {
    axios
      .get("https://blog-api-98.herokuapp.com/blogs")
      .then((response) => {
        console.log(response.data);
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
          <div className="data" style={{ paddingTop: 30 }}>
            {data.length > 0 ? (
              <p>Đã có dữ liệu</p>
            ) : (
              <h3 style={{ textAlign: "center" }}>
                Chưa có nội dung nào ở đây
              </h3>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
