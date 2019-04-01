import React from "react";
const cheerio = require("cheerio");

const Clean = props => {
  return (
    <div>
      <div class="chapter" data-chapter-number={props.bookDetail.chapterNum}>
        <div class="chapter-start">
          <div class="ch-head">
            {" "}
            Chapter{" "}
            <span class="chapter-number">{props.bookDetail.chapterNum}</span>
          </div>
          <h1 class="chaptertitle">{props.bookDetail.chapterName}</h1>
          <h3 class="author">{props.bookDetail.author}</h3>
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.bookDetail.html }} />
        <div className="next-chapter-wrapper">
          <a
            className="next-chapter-button"
            data-next-chapter={parseInt(props.bookDetail.chapterNum) + 1}
          >
            <span>NEXT :</span>
            {props.bookDetail.nextChapterName}
            <i class="fas fa-chevron-right" />
          </a>
        </div>
        <div class="chapter-end" />
      </div>
    </div>
  );
};

export default Clean;
