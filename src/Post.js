import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Container, Divider } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ReactHtmlParser from "react-html-parser";
import { Helmet } from "react-helmet";
export default class Post extends Component {
  state = {
    data: {},
  };
  componentDidMount() {
    Axios.get(
      `https://blog-api-98.herokuapp.com/blogs/${this.props.match.params.id}`
    )
      .then((response) => {
        this.setState({ data: response.data.data[0] });
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div style={{ padding: 10 }}>
        <Helmet>
          <title>{data.title}</title>
          <meta name="description" content={data.description} />
          
        </Helmet>
        <Container style={{}}>
          <Link className="link-route" to="/">
            <HomeIcon />
          </Link>
          <h1>{data.title}</h1>
          <h4>{data.description}</h4>
          <br />
          <Divider />
          <br />
          <div> {ReactHtmlParser(data.content)}</div>
        </Container>
      </div>
    );
  }
}
