import React, { useRef, useState } from 'react';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <div className="accordion-header" onClick={toggleAccordion}>
                <span className="icon">{isOpen ? '-' : '+'}</span>
                <span className="title">{title}</span>
            </div>
            <div
                ref={contentRef}
                className="accordion-content"
                style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
                }}
            >
                <div className="accordion-inner">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;