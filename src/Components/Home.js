import { useState, useContext, useEffect } from "react";
import RightSideBar from "./RightSideBar";
import Textarea from "./Textarea";
import Split from "react-split";
import "../App.css";
import Draft from "./Draft";
import DarkContext from "../context/DarkContext";
import TextareaMini from "./TextareaMini";

const Home = () => {
  const mode = useContext(DarkContext);
  const initialCount = localStorage.getItem("counter")
    ? localStorage.getItem("counter")
    : "";


  const [input, setInput] = useState(initialCount);
  const [addDraft, setaddDraft] = useState("");

  useEffect(() => {
    localStorage.setItem("counter", [input]);
  }, [input]);

  const handleAddDraft = () => {
    setaddDraft(addDraft);
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
      setInput(input + "\n\n\nNew Tweet");
    }
  };

  return (
    <div className="d-flex h-100 ">
      <Draft
        input={input}
        addDraft={addDraft}
        setaddDraft={setaddDraft}
        handleAddDraft={handleAddDraft}
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
          input={input}
          handleChange={handleChange}
          handleAddTweet={handleAddTweet}
          handleAddDraft={handleAddDraft}
        />
        <div style={{ width: "20%" }}>
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
