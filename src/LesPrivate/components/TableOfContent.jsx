import React, { useState } from "react";
import "./TableOfContents.css";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { MdOpenInFull } from "react-icons/md";

const TableOfContents = ({ title = "Table of Contents", items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="container-TOC">
      <div className="toc-container">
        <div className="toc-container-content">
          <div className="toc-header">
            <h2 className="toc-title">
              <span className="toc-icon">📑</span>
              {title}
            </h2>
            <button className="toc-toggle" onClick={toggleOpen}>
              {isOpen ? <MdOutlineCloseFullscreen /> : <MdOpenInFull />}
            </button>
          </div>
          {isOpen && (
            <ul className="toc-list">
              {items.map((item, index) => (
                <li key={index} className="toc-item">
                  <a href={item.href} className="toc-link">
                    {item.text}
                  </a>
                  {item.subItems && (
                    <ul className="toc-sublist">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="toc-subitem">
                          <a href={subItem.href} className="toc-sublink">
                            {subItem.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
