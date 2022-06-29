import React from "react";
import { marked } from 'marked'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `

  ### Heading

  # Build a Markdown Previewer

  ### Sub-Heading

  ## React Development Challenge by Freecodecamp

  ### A Link to my Github Profile
  
  *[Mohsin Nawaz](https://github.com/MohsinMalik2)*

  ### Inline Code

  You can contact me directly by using \`<a href="tel:+923036931887">\` element here instead.

  ### Block Quotes!
  > Never Quit Learning!

  ### Code Block

  1.  Open my git profile
  2.  Find the following code block in markdown-previewer/public/index.html project:

          <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
              <div id="root">
              </div>

  3.  Replace the id according to your need.

  ### Image

  ![Mohsin Nawaz Image](https://avatars.githubusercontent.com/u/69287526?v=4 "Mohsin Nawaz Image")

  ### Bold Text

  Make sure to **Star the Project**.

      `,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    var inputStyle = {
      width: "80%",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };
    var outputStyle = {
      width: "80%",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
      border: "2px solid #000",
      borderRadius: "9px",
      textAlign:"center"
      
    };

    return (
      <div className="App text-center">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                  Markdown Previewer
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                    Markdown Input
                </h4>
              </div>
              <div className="input" style={inputStyle}>
                <textarea
                  id="editor"
                  className="input"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>

            <div className="col-md-6">
              {" "}
              <div className="col text-center">
                <h4>
                    Preview Here
                </h4>
              </div>
              <div
              id="preview"
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}