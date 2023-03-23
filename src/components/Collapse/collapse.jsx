import './collapse.css'
import arrow from '../../data/arrow.png';
import { useState } from 'react';

const Collapse = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const renderContent = () => {
    if (Array.isArray(content)) {
      return content.map((item, index) => <p key={index}>{item}</p>);
    }
    return content;
  };

  return (
    <div className="collapse">
      <h3 className="collapse_title" onClick={handleToggle}>
        {title}
        <img
          className={`arrow ${toggle ? 'arrow_up' : 'arrow_down'}`} 
          src={arrow}
          alt="show content"
        />
      </h3>
      <div className={`collapse_content${toggle ? '' : '_hidden'}`}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Collapse;