import {useSelector} from 'react-redux';
import {selectStyle} from '../Features/InputSlice';
import { DarkMode, lightMode } from "../Features/Styles";


const QueueNew = () => {
  const newStyle = useSelector(selectStyle);
   const style = newStyle === true ? DarkMode.styleLight : lightMode.styleLight;
  const darkStyle =
    newStyle === true ? DarkMode.styleDark : lightMode.styleDark;


  return (
    <div style={darkStyle} className="w-100 px-2 h-100 scroll">
      <div className="container my-2 ">
        <div style={darkStyle}>
          <p>Today</p>
          <div style={style} className="border rounded mx-5">
            <div className="d-flex gap-3 align-items-center border-0 border-bottom p-1 py-2 textColor">
              <i className="fa fa-plus"></i>
              <span>Schedule Draft</span>
            </div>
            <div className="p-1 py-2">12:00 pm</div>
          </div>

          <div style={style} className="border rounded mx-5">
            <div className="d-flex gap-3 align-items-center border-0 border-bottom p-1 py-2 textColor">
              <i className="fa fa-plus"></i>
              <span>Schedule Draft</span>
            </div>
            <div className="p-1 py-2">12:00 pm</div>
          </div>
        </div>
      </div>
      <hr style={{ width: '100vw'}} />
      {/* Second div */}

      <div style={darkStyle} className="container">
        <p>Tuesday</p>
        <div>
        <div style={style} className="border rounded mx-5">
            <div className="d-flex gap-3 align-items-center border-0 border-bottom p-1 py-2 textColor">
              <i className="fa fa-plus"></i>
              <span>Schedule Draft</span>
            </div>
            <div className="p-1 py-2">12:00 pm</div>
          </div>

          <div style={style} className="border rounded mx-5">
            <div className="d-flex gap-3 align-items-center border-0 border-bottom p-1 py-2 textColor">
              <i className="fa fa-plus"></i>
              <span>Schedule Draft</span>
            </div>
            <div className="p-1 py-2">12:00 pm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueNew;
