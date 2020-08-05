import React, { Component } from "react";
import { TextField, Button, Divider } from "@material-ui/core";
import Upload from "./Upload";
import Axios from "axios";
import DataTable from "./DataTable";

export default class Admin extends Component {
  state = {
    username: null,
    password: null,
    data: [],
  };
  componentDidMount() {
    Axios.get("https://blog-api-98.herokuapp.com/blogs")
      .then((response) => {
        this.setState({
          data: response.data.data.filter((item) => {
            return item.genre === "English";
          }),
        });
      })
      .catch((error) => console.log(error.response));
  }

  handleDelete = (id) => {
    Axios.delete(`https://blog-api-98.herokuapp.com/blogs/${id}`)
      .then((response) => {
        if (response.data.success) {
          let copyState = this.state.data.filter((item) => {
            return item.id !== id;
          });

          this.setState({ data: copyState });
          alert("Deleted");
        } else alert("Error");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (
      this.state.username === "nguyenquochung" &&
      this.state.password === "nguyenduclong"
    ) {
      alert("Welcome!");
      window.localStorage.setItem("auth", true);
      window.location.reload();
    } else {
      alert("Wrong username or password");
    }
  };
  handleLogout = () => {
    window.localStorage.removeItem("auth");
    window.location.reload();
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Admin </h1>
        {window.localStorage.getItem("auth") ? (
          <div>
            <h1>Welcome Admin!</h1>
            <Button
              variant="outlined"
              color="secondary"
              onClick={this.handleLogout}
            >
              Logout
            </Button>
            <br />
            <br />
            <br />
            <Upload />
            <h1>Posts</h1>
            <DataTable data={this.state.data} onDelete={this.handleDelete} />
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <TextField
              label="Username"
              name="username"
              type="text"
              onChange={this.handleChange}
            />
            <br />
            <TextField
              label="Password"
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <Button type="submit" color="primary" variant="contained">
              Login
            </Button>

            <Divider />
          </form>
        )}
      </div>
    );
  }
}
