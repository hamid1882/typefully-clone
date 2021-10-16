import { useState, useContext } from "react";
import RightSideBar from "./RightSideBar";
import Textarea from "./Textarea";
import Split from "react-split";
import "../App.css";
import Draft from "./Draft";
import DarkContext from "../context/DarkContext";
import TextareaMini from "./TextareaMini";

const Home = () => {
  const mode = useContext(DarkContext);

  const [input, setInput] = useState("");
  const [addInput, setAddInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
      setInput(e.target.value)
  };

  const handleAddTweet = (e) => {
    e.preventDefault();
    setInput(input+ '\n\n\n Write here')
  }

  return (
    <div className="d-flex w-100">
      <Draft />
      <Split
        direction="horizontal"
        minSize={[1000, 700]}
        sizes={[70, 30]}
        className="d-none d-md-flex gutterNew"
        style={mode.style}
      >
          <Textarea input={input} handleChange={handleChange} />
        <div>
          <RightSideBar input={input} handleChange={handleChange} handleAddTweet={handleAddTweet} />
        </div>
      </Split>
      <div className="w-100 d-md-none tweet-overflow">
        <TextareaMini input={input} handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Home;
