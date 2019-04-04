const cheerio = require("cheerio");

export function htmlCleanup(content) {
  const $ = cheerio.load(content);

  // Clear classes of all html element first

  $("*")
    .removeAttr("class")
    .html();

  // $("a")
  //   .removeAttr("class")
  //   .html();

  // $("em")
  //   .removeAttr("class")
  //   .html();

  // $("pre")
  //   .removeAttr("class")
  //   .html();

  // $("ul")
  //   .removeAttr("class")
  //   .html();

  // $("li")
  //   .removeAttr("class")
  //   .html();

  // $("kbd")
  //   .removeAttr("class")
  //   .html();

  // $("strong")
  //   .removeAttr("class")
  //   .html();

  // $("p")
  //   .removeAttr("class")
  //   .html();

  $("*")
    .removeAttr("id")
    .html();

  // $("a")
  //   .removeAttr("class")
  //   .html();

  // $("div")
  //   .removeAttr("class")
  //   .html();

  $("div")
    .removeAttr("title")
    .html();

  // $("div")
  //   .removeAttr("id")
  //   .html();

  // $("h3")
  //   .remove("class")
  //   .html();

  // $("h2")
  //   .remove("class")
  //   .html();

  // $("h1")
  //   .remove("class")
  //   .html();

  // $("a").each(function() {
  //   $(this).replaceWith($(this).html());
  // });

  $("div").each(function() {
    $(this).replaceWith($(this).html());
  });

  $("article").each(function() {
    $(this).replaceWith($(this).html());
  });

  $("header").each(function() {
    $(this).replaceWith($(this).html());
  });

  $("section").each(function() {
    $(this).replaceWith($(this).html());
  });

  $("span").each(function() {
    $(this).replaceWith($(this).html());
  });

  $("p span").each(function() {
    $(this).replaceWith($(this).html());
  });

  // Clean up <pre> tag from br and strong tags

  $("pre span").each(function() {
    $(this).replaceWith($(this).html());
  });

  $("pre strong").each(function() {
    $(this).replaceWith($(this).html());
  });

  // $("div br").each(function() {
  //   $(this).replaceWith($(this).html());
  // });

  // Add p tag to all images with image-wrapper

  // const imgStyle = $('<p class="image-wrapper"></p>');
  // $("img").wrap(imgStyle);

  // Update image class to lazyload

  $("img")
    .removeClass()
    .html();

  $("img").addClass("lazyload");

  // Add code tag to all pre tags
  const addPre = $("<pre></pre>");

  $("pre").each((i, item) => (item.tagName = "code"));
  $("code").wrap(addPre);

  // Add tip styling to tip

  const addBody = $('<div class="body"></div>');
  $("tip p").wrap(addBody);
  $("tip").addClass("box tip");
  $("tip").each((i, item) => (item.tagName = "div"));

  // Add note styling to note

  $("note p").wrap(addBody);
  $("note").addClass("box note");
  $("note").each((i, item) => (item.tagName = "div"));

  const cleanHTML = $.html();

  console.log(`
  <div class="chapter" data-chapter-number="1"> /* Number of chapter here */
    <div class="chapter-start">
      <div class="ch-head"> Chapter <span class="chapter-number">/* Chapter number */</span></div>
      <h1 class="chaptertitle">/* Title */</h1>
      <h3 class="author">/* Author */</h3>
    </div>
  ${$.html()}
    <div class="next-chapter-wrapper">
      <a class="next-chapter-button" data-next-chapter="2">
        <span>NEXT :</span>
        First Contact - Java, XML, and UI Design
        <i class="fas fa-chevron-right"></i>
      </a>
    </div>
    <div class="chapter-end"></div>
  </div>
  `);

  return cleanHTML;
}
