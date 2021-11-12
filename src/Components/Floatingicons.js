import ReactTooltip from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
import {
  selectInput,
  saveDraft,
  selectStyle,
  viewDraft,
  selectDraftView,
  collapseDraft,
} from "../Features/InputSlice";
import { collapseIn } from "../Features/Styles";

const Floatingicons = () => {
  const dispatch = useDispatch();
  const renderValue = useSelector(selectInput);
  const newStyle = useSelector(selectStyle);
  const style = newStyle.styleLight;
  const darkStyle = newStyle.styleDark;

  let increment = 0;
  const addDraft = () => {
    dispatch(
      saveDraft({
        item: " ",
        id: increment++,
      })
    );
    dispatch(
      collapseDraft({
        transition: "all 1000ms",
        transform: "translate(-250px)",
      })
    );
  };

  // const handleNewTweet = () => {
  //   dispatch(
  //     newTweet({
  //       item: renderValue + "\n\n\nNew Tweet",
  //     })
  //   );
  // };

  const collapse = useSelector(selectDraftView);

  const handleViewDraft = () => {
    if (collapse === "d-block") {
      dispatch(viewDraft("d-none"));
      dispatch(
        collapseDraft({
          transition: "all 700ms",
          borderColor: "#ecf0f4",
          transform: "translate(0px)",
        })
      );
    } else {
      dispatch(viewDraft("d-block"));
      dispatch(collapseDraft(collapseIn));
    }
  };

  return (
    <>
      <div
        style={style}
        className="overflow-hidden d-flex p-2 justify-content-center align-items-center"
      >
        <ReactTooltip />
        <div
          // eslint-disable-next-line
          style={style}
          className={`col d-flex rounded-pill justify-content-end align-items-center overflow-hidden mx-1 ${
            darkStyle.color === "white" ? "iconsShadow" : "iconsShadowDark"
          }`}
        >
          <button
            onClick={addDraft}
            style={style}
            className={`border-0 p-2 mx-1 ${collapse}`}
            data-tip="New Draft"
          >
            <i className={`fa fa-file float-hover `}></i>
          </button>
          <button
            style={style}
            data-tip="Add Tweet"
            className={`border-0 p-2 mx-1 ${collapse}`}
          >
            <i className="fa fa-plus-square float-hover"></i>
          </button>
          <button
            style={style}
            data-tip="Add Images"
            className={`border-0 p-2 mx-1 ${collapse}`}
          >
            <i className="fa fa-images float-hover"></i>
          </button>

          <button
            style={style}
            data-tip="Zen Mode"
            onClick={handleViewDraft}
            className={`border-0  p-2 mx-1 `}
          >
            {collapse === "d-block" ? (
              <i className={`fa fa-expand-alt float-hover `}></i>
            ) : (
              <i
                className={`fa fa-compress-alt float-hover ${
                  collapse === "d-block" ? "" : "floatactive"
                }`}
              ></i>
            )}
          </button>
        </div>
        <div
          style={{ right: "20px", bottom: "55px" }}
          className="d-md-none mx-2 position-absolute"
        >
          <button
            disabled={renderValue === ""}
            className="border-0 btn btn-primary rounded-circle"
          >
            <i className="fa fa-paper-plane p-1 py-2 text-light"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Floatingicons;
