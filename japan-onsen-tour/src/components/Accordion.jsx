import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";

const Accordion = ({ items, allowMultiple = false }) => {
	const [openIndexes, setOpenIndexes] = useState([]);

	const handleClick = (index) => {
		if (allowMultiple) {
			setOpenIndexes((prev) =>
				prev.includes(index)
					? prev.filter((i) => i !== index)
					: [...prev, index]
			);
		} else {
			setOpenIndexes(openIndexes[0] === index ? [] : [index]);
		}
	};

	return (
		<div className="accordion-group">
			{items.map((item, index) => (
				<AccordionItem
					key={index}
					title={item.title}
					content={item.content}
					isOpen={openIndexes.includes(index)}
					onClick={() => handleClick(index)}
				/>
			))}
		</div>
	);
};

export default Accordion;
