import React from 'react';
import { FaExclamationTriangle, FaTimes } from 'react-icons/fa';

interface WarningMessageProps {
  message: string;
  onClose: () => void;
}

const WarningMessage: React.FC<WarningMessageProps> = ({ message, onClose }) => {
  return (
    <div className="fixed top-1 right-2 sm:top-4 sm:right-4  flex items-center bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded shadow-lg z-50" role="alert">
      <FaExclamationTriangle className="fill-current h-6 w-6 text-yellow-500 mr-2" />
      <div>
        <strong className="font-bold">WARNING!</strong>
        <span className="block sm:inline"> {message}</span>
      </div>
      <button onClick={onClose} className="ml-4">
        <FaTimes className="fill-current h-6 w-6 text-yellow-500" />
      </button>
    </div>
  );
};

export default WarningMessage;
