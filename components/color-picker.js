import React from "react";

import "./color-picker.css";
import { observer, inject } from "mobx-react";

@inject("ColorStore")
@observer
class Component extends React.Component {
  componentDidMount() {
    const { ColorStore } = this.props;
    this.refs.grid.addEventListener("click", e => {
      if (e.target !== this.refs.pointer) {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - 1 - rect.left;
        let y = e.clientY - 1 - rect.top;
        this.refs.pointer.style.setProperty("top", `${y}px`);
        this.refs.pointer.style.setProperty("left", `${x}px`);
        ColorStore.getHsl(x, y);
      }
    });
  }

  render() {
    const { ColorStore } = this.props;
    return (
      <div className="container">
        <div id="colorpicker">
          <div className="grid" ref="grid">
            <div className="pointer" ref="pointer" />
          </div>
        </div>
        <div
          className="colorcode"
          ref="colorcode"
          style={{ backgroundColor: ColorStore.hsl }}
        />
        <div className="hslbox">{ColorStore.hsl}</div>
      </div>
    );
  }
}

export default Component;
