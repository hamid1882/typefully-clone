import { useState } from "react";
import { useSelector } from "react-redux";
import About from "./About";
import Account from "./Account";
import Look from "./Look";
import Buttons from "./Buttons";
import DownloadApp from "./DownloadApp";
import Editing from "./Editing";
import {selectStyle} from '../../Features/TodoSlice';

const SettingModalUI = () => {
  const [toggleTab, settoggleTab] = useState(1);

  const newStyle = useSelector(selectStyle);
  const style = newStyle[newStyle.length - 1].styleLight;
  const darkStyle = newStyle[newStyle.length - 1].styleDark;

  const handleToggleTab = (index) => {
    settoggleTab(index);
  };

  return (
    <div
      style={{ height: "calc(100vh - 5rem)" }}
      className="container d-flex shadow rounded"
    >
      <Buttons toggleTab={toggleTab} handleToggleTab={handleToggleTab} />
      {/* Modal */}

      <div className="m-3 w-100 p-2 scroll tweet-auto-overflow">
        {/* Account div */}

        <Account
          toggleTab={toggleTab}
          handleToggleTab={handleToggleTab}
          contextStyle={style}
          contextDarkStyle={darkStyle}
        />

        {/* Look div */}
        <Look toggleTab={toggleTab} />

        {/* Editing here! */}
        <Editing
          toggleTab={toggleTab}
          handleToggleTab={handleToggleTab}
          contextStyle={style}
          contextDarkStyle={darkStyle}
        />

        {/* App download here */}
        <DownloadApp
          toggleTab={toggleTab}
          handleToggleTab={handleToggleTab}
          contextStyle={style}
          contextDarkStyle={darkStyle}
        />

        {/* About */}
        <About
          toggleTab={toggleTab}
          handleToggleTab={handleToggleTab}
          contextStyle={style}
          contextDarkStyle={darkStyle}
        />
      </div>
    </div>
  );
};

export default SettingModalUI;
