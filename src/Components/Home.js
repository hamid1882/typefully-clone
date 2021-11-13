import Split from "react-split";
import { useSelector } from "react-redux";
import RightSideBar, { ScheduleButton, TweetButton } from "./RightSideBar";
import Textarea from "./Textarea";
import Draft from "./Draft";
import TextareaMini from "./TextareaMini";
import Schedule from "./Schedule";
import { selectStyle } from "../Features/InputSlice";
import { DarkMode, lightMode } from "../Features/Styles";

const Home = () => {
  const newStyle = useSelector(selectStyle);
  const style = newStyle === true ? DarkMode.styleLight : lightMode.styleLight;


  return (
    <div className="vh-100" style={style}>
      <div className="d-flex h-100 ">
        <Draft />
        <Split
          direction="horizontal"
          minSize={[1000, 200]}
          maxSize={[1000, 300]}
          sizes={[70, 30]}
          gutterAlign="start"
          className="d-none d-md-flex gutterNew"
          style={style}
        >
            <Textarea />
          <div style={{ width: "300px" }}>
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
