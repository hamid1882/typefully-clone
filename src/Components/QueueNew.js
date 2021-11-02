import {useSelector} from 'react-redux';
import {selectStyle} from '../Features/TodoSlice';

const QueueNew = () => {
  const newStyle = useSelector(selectStyle);
  const style = newStyle[newStyle.length - 1].styleLight;
  const darkStyle = newStyle[newStyle.length - 1].styleDark;


  return (
    <div style={darkStyle} className="w-100 px-2 h-100 scroll">
      <div className="container my-4">
        <div style={darkStyle}>
          <p>Today</p>
          <div style={style} className="border rounded shadow">
            <div className="d-flex gap-3 align-items-center border-0 border-bottom p-2 py-3 textColor">
              <i className="fa fa-plus"></i>
              <span>Schedule Draft</span>
            </div>
            <div className="p-2 py-3">12:00 pm</div>
          </div>

          <div style={style} className="border rounded shadow my-3">
            <div className="d-flex gap-3 align-items-center border-0 border-bottom p-2 py-3 textColor">
              <i className="fa fa-plus"></i>
              <span>Schedule Draft</span>
            </div>
            <div style={style} className="p-2 py-3">
              05:00 pm
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: '100vw'}} />
      {/* Second div */}

      <div style={darkStyle} className="container">
        <p>Tuesday</p>
        <div>
          <div style={style} className="border rounded shadow">
            <div className="d-flex gap-3 align-items-center border-0 border-bottom p-2 py-3 textColor">
              <i className="fa fa-plus"></i>
              <span>Schedule Draft</span>
            </div>
            <div className="p-2 py-3">12:00 pm</div>
          </div>

          <div style={style} className="border rounded shadow my-3">
            <div className="d-flex gap-3 align-items-center border-0 border-bottom p-2 py-3 textColor">
              <i className="fa fa-plus"></i>
              <span>Schedule Draft</span>
            </div>
            <div style={style} className="p-2 py-3">
              05:00 pm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueNew;
