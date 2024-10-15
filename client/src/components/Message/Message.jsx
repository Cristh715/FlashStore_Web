import React from "react";
import { FaCircleCheck, FaX, FaCircleXmark } from "react-icons/fa6";
import './Message.css';

const Message = ({ title, message, message2, type }) => {

	return (
		<div className="card-message">
			<div className="icon-container">
				{type === "Success" &&
					<FaCircleCheck />
				}
				{type === "Error" &&
					<FaCircleXmark />
				}
			</div>
			<div className="message-text-container">
				<p className="message-text">{title}</p>
				<p className="sub-text">{message}</p>
				<p className="sub-text">{message2}</p>
			</div>
			<FaX />
		</div>

	);
}

export default Message;