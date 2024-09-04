import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "../App.css"; // Assuming styles are handled here

function AlertOptions() {
  const navigate = useNavigate();

  const options = [
    "Women In Distress",
    "Domestic Abuse",
    "Police",
    "Student / Child Helpline",
    "Ambulance",
  ];

  const handleOptionClick = (option) => {
    // Here, you can add the logic for dialing the phone number
    console.log(`${option} clicked`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-200">
      <div className="bg-white rounded-tl-3xl rounded-br-3xl shadow-lg p-6 max-w-xs w-full">
        <ul className="space-y-4">
          {options.map((option, index) => (
            <li
              key={index}
              className="bg-green-100 p-4 rounded-lg shadow-md text-gray-700 text-lg flex justify-between items-center cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
              <FontAwesomeIcon icon={faPhoneAlt} className="text-gray-600" />
            </li>
          ))}
        </ul>
        <button
          onClick={() => navigate(-1)}
          className="back-button mt-4 bg-blue-500 text-white text-lg p-2 rounded-md"
        >
          BACK
        </button>
      </div>
    </div>
  );
}

export default AlertOptions;
