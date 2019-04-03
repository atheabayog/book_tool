import React from "react";
import { htmlCleanup } from "../helper";
import styled from "styled-components";

const FormStyled = styled.form`
  width: 40%;
  margin-top: 2%;
  label {
    display: block;
  }
  input {
    width: 80%;
    height: 20px;
  }
  textarea {
    width: 80%;
    height: 50vh;
  }
  button {
    background: #fa3292;
    border: none;
    padding: 10px;
    color: #fefefe;
    font-weight: 600;
    font-size: 16px;
  }
`;

class Forms extends React.Component {
  getValue = e => {
    e.preventDefault();
    let content = e.target.elements.content.value;
    let chapName = e.target.elements.chapter_name.value;
    let chapNum = e.target.elements.chapter_number.value;
    let author = e.target.elements.author.value;
    let nextChapName = e.target.elements.nextChapter.value;

    const cleanHTML = htmlCleanup(content);

    this.props.setChapterInfo(
      cleanHTML,
      chapName,
      chapNum,
      author,
      nextChapName
    );
  };

  render() {
    return (
      <FormStyled onSubmit={this.getValue}>
        <p>
          <label for="chapter_name">Chapter Name</label>
          <input type="text" name="chapter_name" />
        </p>
        <p>
          <label for="chapter_num">Chapter Number</label>
          <input type="text" name="chapter_number" />
        </p>
        <p>
          <label for="author">Author</label>
          <input type="text" name="author" />
        </p>
        <p>
          <label for="nextChapter">Next Chapter Name</label>
          <input type="text" name="nextChapter" />
        </p>
        <p>
          <label for="content">Content</label>
          <textarea name="content" />
        </p>
        <button>Clean My HTML</button>
      </FormStyled>
    );
  }
}

export default Forms;
