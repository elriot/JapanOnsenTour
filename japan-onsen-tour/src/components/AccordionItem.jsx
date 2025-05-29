import React, { useRef } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onClick}>
        <span className="icon">{isOpen ? "-" : "+"}</span>
        <span className="title">{title}</span>
      </div>
      <div
        ref={contentRef}
        className="accordion-content"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="accordion-inner">{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
