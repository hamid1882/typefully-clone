import { useContext } from "react";
import Split from "react-split";
import RightSideBar,{SchduleButton, TweetButton} from "./RightSideBar";
import Textarea from "./Textarea";
import Draft from "./Draft";
import TextareaMini from "./TextareaMini";
import { darkContext } from "../Context";
import Schedule from "./Schedule";


const Home = () => {
  const mode = useContext(darkContext);

  return (
    <div style={mode.style}>
      <div className="d-flex h-100 ">
        <Draft />
        <Split
          direction="horizontal"
          minSize={[1000, 400]}
          sizes={[70, 30]}
          gutterAlign="end"
          className="d-none d-md-flex gutterNew"
          style={mode.style}
        >
          <Textarea/>
          <div style={{ width: "20%" }}>
            <RightSideBar>
              <SchduleButton />
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
