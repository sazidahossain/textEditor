import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: null,
      color: ""
    };
    this.setStyle = this.setStyle.bind(this);
    this.setColor = this.setColor.bind(this);
  }
  setStyle(style) {
    this.setState({ styles: style });
  }
  setColor(color) {
    this.setState({ color: color });
  }
  render() {
    let stylings = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];
    const styleOrcolor = () => {
      if (this.state.color) {
        return <textarea style={{ color: this.state.color }} />;
      } else if (this.state.styles) {
        return <textarea style={this.state.styles} />;
      } else {
        return <textarea />;
      }
    };
    let stylingBoxes = stylings.map(style => {
      return (
        <button
          style={styles[style]}
          key={style}
          onClick={() => this.setStyle(styles[style])}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          key={color}
          style={{ backgroundColor: color, height: 30, width: 30 }}
          onClick={() => this.setColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <br />
        {stylingBoxes}
        <br />
        <br />
        {styleOrcolor()}
        <br />
        {colorBoxes}
      </div>
    );
  }
}

export default App;
