import { useContext, useState } from "react";
import DarkContext from "../../context/DarkContext";
import About from "./About";
import Account from "./Account";
import Look from './Look';
import Affiliate from "./Affiliate";
import Buttons from "./Buttons";
import DownloadApp from "./DownloadApp";
import Editing from "./Editing";

const SettingModalUI = () => {
  const [toggleTab, settoggleTab] = useState(1);
  const context = useContext(DarkContext);

  const handleToggleTab = (index) => {
    settoggleTab(index);
  };

  return (
    <div className="container d-flex border rounded vh-100">
      <Buttons toggleTab={toggleTab} handleToggleTab={handleToggleTab} />
      {/* Modal */}

      <div className="m-3 w-100 p-2">
        {/* Account div */}

        <Account toggleTab={toggleTab} handleToggleTab={handleToggleTab} contextStyle={context.style} contextDarkStyle={context.styleDark} />

        {/* Look div */}
        <Look toggleTab={toggleTab} handleToggleTab={handleToggleTab} contextStyle={context.style} contextDarkStyle={context.styleDark} />
        

        {/* Editing here! */}
        <Editing toggleTab={toggleTab} handleToggleTab={handleToggleTab} contextStyle={context.style} contextDarkStyle={context.styleDark} />
       

        {/* App download here */}
        <DownloadApp toggleTab={toggleTab} handleToggleTab={handleToggleTab} contextStyle={context.style} contextDarkStyle={context.styleDark} />
        

        {/* Affiliate*/}
        <Affiliate toggleTab={toggleTab} handleToggleTab={handleToggleTab} contextStyle={context.style} contextDarkStyle={context.styleDark} />
        

        {/* About */}
        <About toggleTab={toggleTab} handleToggleTab={handleToggleTab} contextStyle={context.style} contextDarkStyle={context.styleDark} />
        
      </div>
    </div>
  );
};

export default SettingModalUI;