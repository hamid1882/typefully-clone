import { useContext } from "react";
import Split from "react-split";
import RightSideBar from "./RightSideBar";
import Textarea from "./Textarea";
import Draft from "./Draft";
import TextareaMini from "./TextareaMini";
import { darkContext, mainContext } from "../Context";


const Home = () => {
  const mode = useContext(darkContext);
  const main = useContext(mainContext);

  return (
    <div style={mode.style}>
      <div className="d-flex h-100 ">
        <Draft
          input={main.input}
          addDraft={main.addDraft}
          setaddDraft={main.setaddDraft}
          handleAddDraft={main.handleAddDraft}
        />
        <Split
          direction="horizontal"
          minSize={[1000, 400]}
          sizes={[70, 30]}
          gutterAlign="end"
          className="d-none d-md-flex gutterNew"
          style={mode.style}
        >
          <Textarea
            input={main.input}
            handleChange={main.handleChange}
            handleAddDraft={main.handleAddDraft}
          />
          <div style={{ width: "20%" }}>
            <RightSideBar
              input={main.input}
              handleChange={main.handleChange}
            />
          </div>
        </Split>
        <div className="w-100 d-md-none tweet-overflow">
          <TextareaMini input={main.input} handleChange={main.handleChange} />
        </div>
      </div>
    </div>
  );
};

export default Home;
