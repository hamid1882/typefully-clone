import Split from "react-split";
import { useSelector } from "react-redux";
import RightSideBar, { ScheduleButton, TweetButton } from "./RightSideBar";
import Textarea from "./Textarea";
import Draft from "./Draft";
import TextareaMini from "./TextareaMini";
import Schedule from "./Schedule";
import { selectNavCollapsed, selectStyle } from "../Features/InputSlice";
import "../App.scss"
import useFocus from "./UseFocus";

const Home = () => {
  const navCollapsed = useSelector(selectNavCollapsed)
  const newStyle = useSelector(selectStyle);
  const [inputRef, setInputFocus] = useFocus();


  const style = newStyle === false ? "styleLight" : "styleLightDark";

  return (
    <div className={`${navCollapsed ? "navAfter" : "navBefore"} ${style}`}>
      <div className="d-flex h-100">
        <Draft />
        <Split
          direction="horizontal"
          minSize={[1000, 250]}
          sizes={[65, 35]}
          gutterAlign="start"
          className={`d-none d-md-flex gutterNew ${style}`}
        >
          <Textarea inputRef={inputRef} setInputFocus={setInputFocus}/>
          <div style={{ width: "300px", marginLeft: "-20px" }}>
            <RightSideBar setInputFocus={setInputFocus}>
              <ScheduleButton />
              <Schedule />
              <TweetButton />
            </RightSideBar>
          </div>
        </Split>
        <div className="w-100 d-md-none tweet-overflow">
          <TextareaMini />
        </div>
      </div>
    </div>
  );
};

export default Home;
