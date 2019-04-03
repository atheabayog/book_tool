import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
import styled from "styled-components";

const TinyEditorWrapper = styled.div`
  width: 50%;
  margin-top: 2%;
`;

class TinyEditor extends Component {
  render() {
    return (
      <TinyEditorWrapper>
        <Editor
          apiKey="w12jxn9vfvgq3tvrfh92jetlgkmu0orc8cgn3r9daz7sq8i9"
          value={this.props.html}
          // initialValue={`<p>Generate HTML</p>`}
          init={{
            height: "100%",
            plugins: "link image advcode",
            toolbar:
              "undo redo | bold italic | alignleft aligncenter alignright | code"
          }}
          codesample_languages={[
            { text: "HTML/XML", value: "markup" },
            { text: "JavaScript", value: "javascript" },
            { text: "CSS", value: "css" },
            { text: "PHP", value: "php" },
            { text: "Ruby", value: "ruby" },
            { text: "Python", value: "python" },
            { text: "Java", value: "java" },
            { text: "C", value: "c" },
            { text: "C#", value: "csharp" },
            { text: "C++", value: "cpp" }
          ]}
          onChange={this.props.handleEditorChange}
        />
      </TinyEditorWrapper>
    );
  }
}

export default TinyEditor;
