import React from 'react';
import './Accordion.css';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-item-header" onClick={onClick}>
        <span className="icon">{isOpen ? '-' : '+'}</span>
        <span className="title">{title}</span>
      </div>
      <div className="accordion-item-content">
        {content}
      </div>
    </div>
  );
};

export default AccordionItem;
