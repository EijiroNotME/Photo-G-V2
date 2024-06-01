import React from 'react';
import { FaExclamationCircle, FaTimes } from 'react-icons/fa';

interface ErrorMessageProps {
  message: string;
  onClose: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onClose }) => {
  return (
    <div className="fixed top-1 right-2 sm:top-4 sm:right-4  flex items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded shadow-lg z-50" role="alert">
      <FaExclamationCircle className="fill-current h-6 w-6 text-red-500 mr-2" />
      <div>
        <strong className="font-bold">ERROR!</strong>
        <span className="block sm:inline"> {message}</span>
      </div>
      <button onClick={onClose} className="ml-4">
        <FaTimes className="fill-current h-6 w-6 text-red-500" />
      </button>
    </div>
  );
};

export default ErrorMessage;
