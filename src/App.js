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

  addChapterStyles = (
    html,
    chapterName,
    chapterNum,
    author,
    nextChapterName
  ) => {
    return `
    <div id="reeedr-body">
        <div
        class="chapter"
          data-chapter-number=${chapterNum}
        >
          <div class="chapter-start">
            <div class="ch-head">
              Chapter
              <span class="chapter-number">
                ${chapterNum}
              </span>
            </div>
            <h1 class="chaptertitle">${chapterName}</h1>
            <h3 class="author">${author}</h3>
          </div>
          <div>${html}</div>
          />}
          <div class="next-chapter-wrapper">
            <a
              class="next-chapter-button"
              data-next-chapter=${parseInt(chapterNum) + 1}
            >
              <span>NEXT :</span>
              ${nextChapterName}
              <i class="fas fa-chevron-right" />
            </a>
          </div>
          <div class="chapter-end" />
        </div>
      </div>
    `;
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
