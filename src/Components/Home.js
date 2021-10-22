import { useContext } from "react";
import RightSideBar from "./RightSideBar";
import Textarea from "./Textarea";
import Split from "react-split";
import "../App.css";
import Draft from "./Draft";
import DarkContext from "../context/DarkContext";
import MainContext from '../context/MainContext';
import TextareaMini from "./TextareaMini";

const Home = () => {
  const mode = useContext(DarkContext);
  const main = useContext(MainContext);

  

  return (
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
  );
};

export default Home;
