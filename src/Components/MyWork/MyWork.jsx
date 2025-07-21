import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    if (visibleCount + 3 >= mywork_data.length) {
      setVisibleCount(mywork_data.length);
    } else {
      setVisibleCount(visibleCount + 3);
    }
  };
  return (
    <div id="work" className="mywork">
      <div className="title-box">
        <h1>Portfolio</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.slice(0, visibleCount).map((work, index) => (
          <div key={index} className="work-card">
            <img src={work.w_img} alt={work.w_name} />
            <h3>{work.w_name}</h3>
            {/* <p>{work.w_desc}</p> */}
            {work.w_link && (
              <a
                href={work.w_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-work"
              >
                Visit Project
              </a>
            )}
          </div>
        ))}
      </div>
      {visibleCount < mywork_data.length && (
        <div className="mywork-showmore" onClick={handleShowMore}>
          <p>Show More</p>
          <img src={arrow_icon} alt="Arrow Icon" />
        </div>
      )}
    </div>
  );
};

export default MyWork;
