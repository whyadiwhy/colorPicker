import React, { Fragment } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import style from "./css/green.module.css";

class Green extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: "Click to Copy"
    };
  }

  handleClick = () => {
    this.setState({ values: "C O P I E D" });
  };

  componentDidUpdate() {
    setTimeout(() => this.setState({ values: "Click to Copy" }), 2500);
  }
  render() {
    return (
      <Fragment>
        <div className={style.container} id="green" onClick={this.handleClick}>
          <CopyToClipboard text="#43BE31">
            <div id={style.green1} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #43BE31
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#2E7D32">
            <div id={style.green2} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #2E7D32
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#1B5E20">
            <div id={style.green3} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #1B5E20
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#BACC58">
            <div id={style.green4} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #BACC58
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#00b894">
            <div id={style.green5} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #00b894
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#7bed9f">
            <div id={style.green6} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #7bed9f
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#2ecc72">
            <div id={style.green7} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #2ecc72
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#26ae60">
            <div id={style.green8} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #26ae60
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#6ab04c">
            <div id={style.green9} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #6ab04c
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="##6AB04A">
            <div id={style.green10} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #6AB04A
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#badc57">
            <div id={style.green11} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #0A3D62
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#43BE31">
            <div id={style.green12} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #43BE31
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#45CE30">
            <div id={style.green13} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #45CE30
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#10A881">
            <div id={style.green14} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #10A881
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#1BCA9B">
            <div id={style.green15} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #1BCA9B
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#7CEC9F">
            <div id={style.green16} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #7CEC9F
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#019031">
            <div id={style.green17} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #019031
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#A3CB37">
            <div id={style.green18} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #A3CB37
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#75DA8B">
            <div id={style.green19} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #75DA8B
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#53E0BC">
            <div id={style.green20} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #53E0BC
              </span>
            </div>
          </CopyToClipboard>

          <CopyToClipboard text="#218F76">
            <div id={style.green21} className={style.btn}>
              <span className={`${style.gap} ${style.clr}`}>
                <input
                  type="button"
                  className={style.mybuttonoverlap}
                  value={this.state.values}
                />
                #218F76
              </span>
            </div>
          </CopyToClipboard>
        </div>
      </Fragment>
    );
  }
}

export default Green;
