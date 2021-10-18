import { useState, useContext } from "react";
import RightSideBar from "./RightSideBar";
import Textarea from "./Textarea";
import Split from "react-split";
import "../App.css";
import Draft from "./Draft";
import DarkContext from "../context/DarkContext";
import TextareaMini from "./TextareaMini";
import EmptyDraft from "./EmptyDraft";

const Home = () => {
  const mode = useContext(DarkContext);

  const [input, setInput] = useState("");
  const [addDraft, setaddDraft] = useState("");

  const handleAddDraft = () => {
    setaddDraft(
      <div className="w-100 h-100">
        <EmptyDraft input={input} />
      </div>
    );
  };

  const handleChange = (e) => {
    e.preventDefault();
    handleAddDraft();
    setInput(e.target.value);
  };

  const handleAddTweet = () => {
    if (input === "New Tweet...") {
      setInput(input);
    } else {
      setInput(input + "\n\n\nNew Tweet...");
    }
  };

  return (
    <div className="d-flex w-100">
      <Draft
        input={input}
        addDraft={addDraft}
        handleAddDraft={handleAddDraft}
      />
      <Split
        direction="horizontal"
        minSize={[1000, 700]}
        sizes={[70, 30]}
        className="d-none d-md-flex gutterNew"
        style={mode.style}
      >
        <Textarea
          input={input}
          handleChange={handleChange}
          handleAddTweet={handleAddTweet}
          handleAddDraft={handleAddDraft}
        />
        <div>
          <RightSideBar
            input={input}
            handleChange={handleChange}
            handleAddTweet={handleAddTweet}
          />
        </div>
      </Split>
      <div className="w-100 d-md-none tweet-overflow">
        <TextareaMini input={input} handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Home;
