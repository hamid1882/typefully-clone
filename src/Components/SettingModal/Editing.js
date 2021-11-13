import { useState } from "react";
import { useDispatch } from "react-redux";
import { scrollBar, textDirection } from "../../Features/InputSlice";

const Editing = (props) => {
  const [selectEmoji, setselectEmoji] = useState(1);
  const [textCount, settextCount] = useState(1);

  const handleEmojiCount = (index) => {
    setselectEmoji(index);
  };

  const dispatch = useDispatch();

  const handleTextCount = (index) => {
    settextCount(index);
    dispatch(textDirection());
  };

  const handleScrollBar = () => {
    dispatch(scrollBar());
  };

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
                className="form-check-input p-2 m-2"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={handleScrollBar}
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
                onClick={() => handleTextCount(1)}
                style={
                  textCount === 1 ? props.contextDarkStyle : props.contextStyle
                }
                className="btn col border-0 shadow-none rounded-pill"
              >
                Left to Right
              </button>
              <button
                onClick={() => handleTextCount(2)}
                style={
                  textCount === 2 ? props.contextDarkStyle : props.contextStyle
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
