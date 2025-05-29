import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import './Accordion.css';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-group">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
