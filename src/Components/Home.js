import Split from "react-split";
import { useSelector } from "react-redux";
import { selectStyle } from "../Features/TodoSlice";
import RightSideBar, { ScheduleButton, TweetButton } from "./RightSideBar";
import Textarea from "./Textarea";
import Draft from "./Draft";
import TextareaMini from "./TextareaMini";
import Schedule from "./Schedule";

const Home = () => {
  const newStyle = useSelector(selectStyle);
  const style = newStyle[newStyle.length - 1].styleLight;

  return (
    <div className="vh-100" style={style}>
      <div className="d-flex h-100 ">
        <Draft />
        <Split
          direction="horizontal"
          minSize={[1000, 400]}
          sizes={[70, 30]}
          gutterAlign="end"
          className="d-none d-md-flex gutterNew"
          style={style}
        >
            <Textarea />
          <div style={{ width: "20%" }}>
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
