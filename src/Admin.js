import React, { Component } from "react";
import { TextField, Button, Divider } from "@material-ui/core";
import Upload from "./Upload";
import Axios from "axios";
import DataTable from "./DataTable";
import SubscribersTable from "./SubscribersTable";
import { Link } from "react-router-dom";

export default class Admin extends Component {
  state = {
    username: null,
    password: null,
    data: [],
    subs: [],
  };
  componentDidMount() {
    Axios.get("http://localhost:8000/blogs")
      .then((response) => {
        this.setState({
          data: response.data.data.filter((item) => {
            return item.genre === "English";
          }),
        });
      })
      .catch((error) => console.log(error.response));

    Axios.get("http://localhost:8000/subscribers").then((response) => {
      this.setState({
        subs: response.data.data,
      });
    });
  }

  handleDelete = (id) => {
    Axios.delete(`http://localhost:8000/blogs/${id}`)
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

  handleDeleteSub = (id) => {
    Axios.delete(`http://localhost:8000/subscribers/${id}`)
      .then((response) => {
        if (response.data.success) {
          let copyState = this.state.subs.filter((item) => {
            return item._id !== id;
          });

          this.setState({ subs: copyState });
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
    if (this.state.username === "nqh" && this.state.password === "ndl") {
      alert("Welcome!");
      window.localStorage.setItem("auth", true);
      window.location.href = "/newenglish";
    } else {
      alert("Wrong username or password");
    }
  };
  handleLogout = () => {
    window.localStorage.removeItem("auth");
    window.location.href = "/newenglish";
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Admin </h1>
        {window.localStorage.getItem("auth") ? (
          <div>
            <h1>Welcome Admin!</h1>
            <Button style={{ backgroundColor: "#75d18e", marginRight: 30 }}>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Back to client
              </Link>
            </Button>
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
            <br />
            <h1>Subscribers</h1>
            <SubscribersTable
              subs={this.state.subs}
              onDeleteSub={this.handleDeleteSub}
            />
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
