import { useState, useContext } from "react";
import { mainContext } from "../../Context";

const Editing = (props) => {
  const [selectEmoji, setselectEmoji] = useState(1);

  const handleEmojiCount = (index) => {
    setselectEmoji(index);
  };

  const main = useContext(mainContext);


  return (
    <div>
      <div className={`${props.toggleTab === 3 ? "d-block" : "d-none"}`}>
        <h1 style={props.contextDarkStyle} className="bg-transparent">
          Editing
        </h1>
        <div className="my-4">
          <h4 style={props.contextDarkStyle} className="bg-transparent">
            Emoji Skin-Tone
          </h4>
          <p>
            In the editor, try ':' followd by an emoji name like :rochet or
            :fire
          </p>
        </div>
        <div
          style={props.contextDarkStyle}
          className="d-flex border rounded-pill p-2 bg-transparent"
        >
          <button
            onClick={() => handleEmojiCount(1)}
            style={
              selectEmoji === 1 ? props.contextDarkStyle : props.contextStyle
            }
            className="btn border-0 rounded-pill col shadow-none p-1"
          >
            ✋
          </button>
          <button
            onClick={() => handleEmojiCount(2)}
            style={
              selectEmoji === 2 ? props.contextDarkStyle : props.contextStyle
            }
            className="btn border-0 rounded-pill col shadow-none p-1"
          >
            ✋🏻
          </button>
          <button
            onClick={() => handleEmojiCount(3)}
            style={
              selectEmoji === 3 ? props.contextDarkStyle : props.contextStyle
            }
            className="btn border-0 rounded-pill col shadow-none p-1"
          >
            ✋🏼
          </button>
          <button
            onClick={() => handleEmojiCount(4)}
            style={
              selectEmoji === 4 ? props.contextDarkStyle : props.contextStyle
            }
            className="btn border-0 rounded-pill col shadow-none p-1"
          >
            ✋🏽
          </button>
          <button
            onClick={() => handleEmojiCount(5)}
            style={
              selectEmoji === 5 ? props.contextDarkStyle : props.contextStyle
            }
            className="btn border-0 rounded-pill col shadow-none p-1"
          >
            ✋🏾
          </button>
          <button
            onClick={() => handleEmojiCount(6)}
            style={
              selectEmoji === 6 ? props.contextDarkStyle : props.contextStyle
            }
            className="btn border-0 rounded-pill col shadow-none p-1"
          >
            ✋🏿
          </button>
        </div>
        <div className="my-4">
          <h4 style={props.contextDarkStyle} className="bg-transparent">
            Others
          </h4>
          <hr />
          <div
            style={props.contextDarkStyle}
            className="d-flex bg-transparent justify-content-between align-items-center"
          >
            <div>Show Scrollbars</div>
            <div className="form-check form-switch fs-4">
              <input
                onClick={main.handleScrollBar}
                className="form-check-input p-2 m-2"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
              />
            </div>
          </div>
          <div className="my-3">
            <h4 style={props.contextDarkStyle} className="bg-transparent">
              Text Direction
            </h4>
            <hr />
            <div
              style={props.contextStyle}
              className="d-flex border rounded-pill p-1"
            >
              <button
                onClick={() => main.handleTextCount(1)}
                style={
                  main.textCount === 1
                    ? props.contextDarkStyle
                    : props.contextStyle
                }
                className="btn col border-0 shadow-none rounded-pill"
              >
                Left to Right
              </button>
              <button
                onClick={() => main.handleTextCount(2)}
                style={
                  main.textCount === 2
                    ? props.contextDarkStyle
                    : props.contextStyle
                }
                className="btn col border-0 shadow-none rounded-pill"
              >
                Right to Left
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editing;
