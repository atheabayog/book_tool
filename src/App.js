import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Forms from "./components/Forms";
// import Prism from "prismjs";
import styled from "styled-components";
import TinyEditor from "./components/TinyEditor";

const FormsBox = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
`;

class App extends Component {
  state = {
    html: "",
    chapterName: "",
    chapterNum: 0,
    author: "",
    nextChapterName: ""
  };

  setChapterInfo = (html, chapterName, chapterNum, author, nextChapterName) => {
    this.setState({ html, chapterName, chapterNum, author, nextChapterName });
  };

  handleEditorChange = e => {
    console.log("Content was updated:", e.target.getContent());
  };

  render() {
    return (
      <div className="App">
        <Title version="1.0.0v" />
        <FormsBox>
          <Forms setChapterInfo={this.setChapterInfo} />
          <TinyEditor
            html={this.state.html}
            handleEditorChange={this.handleEditorChange}
          />
        </FormsBox>
      </div>
    );
  }
}

export default App;
