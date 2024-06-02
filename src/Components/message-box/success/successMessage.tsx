import React from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

interface SuccessMessageProps {
  message: string;
  onClose: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message, onClose }) => {
  return (
    <div role="alert" className="alert alert-success flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-lg z-[999]">
      <FaCheckCircle className="stroke-current shrink-0 h-6 w-6 text-green-500 mr-2" />
      <span>{message}</span>
      <button onClick={onClose} className="ml-4">
        <FaTimes className="stroke-current h-6 w-6 text-green-500" />
      </button>
    </div>
  );
};

export default SuccessMessage;
