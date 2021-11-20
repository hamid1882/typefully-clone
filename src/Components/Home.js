import Split from "react-split";
import { useSelector } from "react-redux";
import RightSideBar, { ScheduleButton, TweetButton } from "./RightSideBar";
import Textarea from "./Textarea";
import Draft from "./Draft";
import TextareaMini from "./TextareaMini";
import Schedule from "./Schedule";
import { selectNavCollapsed, selectStyle } from "../Features/InputSlice";

const Home = () => {
  const navCollapsed = useSelector(selectNavCollapsed);
  const newStyle = useSelector(selectStyle);
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
          <Textarea />
          <div style={{ width: "300px", marginLeft: "-20px" }}>
            <RightSideBar>
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
