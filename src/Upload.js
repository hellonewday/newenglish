import React, { Component } from "react";
import { TextField, Button, Container } from "@material-ui/core";
import { Editor } from "@tinymce/tinymce-react";
import Axios from "axios";

export default class Upload extends Component {
  state = {
    title: null,
    image: null,
    content: null,
    description: null,
  };
  handleEditorChange = (content, editor) => {
    this.setState({ content: content });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFileChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", this.state.image);
    fd.append("genre", "English");
    fd.append("title", this.state.title);
    fd.append("desc", this.state.description);
    fd.append("content", this.state.content);
    fd.append("created_at", Date.now());

    Axios.post("http://localhost:8000/blogs", fd)
      .then((response) => {
        if (response.data.success) {
          alert("Them bai viet thanh cong");
          window.location.reload();
        }
      })
      .catch((error) => console.log(error.response));
  };

  render() {
    return (
      <Container>
        <TextField
          fullWidth
          label="Title"
          name="title"
          variant="outlined"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <TextField
          fullWidth
          label="Description"
          name="description"
          variant="outlined"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          type="file"
          onChange={this.handleFileChange}
          style={{
            width: "100%",
            border: "1px solid gainsboro",
            padding: "10px 0px 10px 2px",
          }}
        />
        <br />
        <br />
        <Editor
          apiKey="oaknz0i9nteit4h5806mvsazgv7wd4n8agw7s7rfmjjzaiby"
          initialValue="<p>This is the initial content of the editor</p>"
          init={{
            height: 500,
            menubar: true,
            selector: "textarea",
            plugins: [
              "advlist autolink lists link image charmap print preview anchor hr anchor pagebreak",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar: `undo redo | formatselect  | bold italic backcolor | \
                   alignleft aligncenter alignright alignjustify | \
                   bullist numlist outdent indent | removeformat | media`,
            toolbar_mode: "floating",
          }}
          onEditorChange={this.handleEditorChange}
        />
        <br />
        <Button
          onClick={this.handleSubmit}
          variant="contained"
          color="secondary"
          fullWidth
        >
          Send
        </Button>
      </Container>
    );
  }
}
