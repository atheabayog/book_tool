import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Forms from "./components/Forms";
import Clean from "./components/Clean";

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
  render() {
    return (
      <div className="App">
        <Title />
        <Forms setChapterInfo={this.setChapterInfo} />
        <Clean bookDetail={this.state} />
      </div>
    );
  }
}

export default App;
