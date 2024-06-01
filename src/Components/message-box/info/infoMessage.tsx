import React from 'react';
import { FaInfoCircle, FaTimes } from 'react-icons/fa';

interface InfoMessageProps {
  message: string;
  onClose: () => void;
}

const InfoMessage: React.FC<InfoMessageProps> = ({ message, onClose }) => {
  return (
    <div className="fixed top-1 right-2 sm:top-4 sm:right-4  flex items-center bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded shadow-lg z-50" role="alert">
      <FaInfoCircle className="fill-current h-6 w-6 text-blue-500 mr-2" />
      <div>
        <strong className="font-bold">INFO!</strong>
        <span className="block sm:inline"> {message}</span>
      </div>
      <button onClick={onClose} className="ml-4">
        <FaTimes className="fill-current h-6 w-6 text-blue-500" />
      </button>
    </div>
  );
};

export default InfoMessage;
