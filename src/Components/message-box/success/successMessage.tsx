import React from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

interface SuccessMessageProps {
  message: string;
  onClose: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message, onClose }) => {
  return (
    <div className="fixed top-1 right-2 sm:top-4 sm:right-4 flex items-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-lg z-[999]" role="alert">
      <FaCheckCircle className="fill-current h-6 w-6 text-green-500 mr-2" />
      <div>
        <strong className="font-bold">SUCCESS!</strong>
        <span className="block sm:inline"> {message}</span>
      </div>
      <button onClick={onClose} className="ml-4">
        <FaTimes className="fill-current h-6 w-6 text-green-500" />
      </button>
    </div>
  );
};

export default SuccessMessage;
