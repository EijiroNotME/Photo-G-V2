import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { FaImage, FaTimes } from "react-icons/fa";
import Spinner from "../spinner/spinner";
import Confirmation from "../alerts/confirmation.tsx";  // Import the confirmation component
import useFirestore from "../../hooks/useFirestore.ts";

const AddImageModal = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | undefined>(undefined);
  const [file, setFile] = useState<File | null>(null);
  const [categoryInput, setCategoryInput] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);

  const { state, addPost } = useFirestore();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://api.unsplash.com/topics", {
          headers: {
            Authorization: "Client-ID U3zvVhwskdi0u8_Z-S9bm4tyJ7BOVuVLNy0jZWGhSsU",
          },
          params: { per_page: 500 },
        });
        const categoryNames = response.data.map((category: any) => category.title);
        setSuggestions(categoryNames);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (state.success) {
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }
  }, [state.success]);

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategoryInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryInput(event.target.value);
  };

  const handleAddCategory = (category: string) => {
    if (!categories.includes(category)) {
      setCategories([...categories, category]);
    }
    setCategoryInput("");
  };

  const handleRemoveCategory = (category: string) => {
    setCategories(categories.filter((c) => c !== category));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (file) {
      await addPost(title, description, categories, file);
      setTitle("");
      setDescription("");
      setCategories([]);
      setCategoryInput("");
      setFile(null);
      setPreviewImage(undefined);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddCategory(categoryInput);
    }
  }; 

  const handleCloseModal = () => {
    if (title || description || categories.length > 0 || previewImage || categoryInput) {
      setShowConfirmation(true);
    } else {
      const modal = document.getElementById('my_modal_3');
      if (modal) {
        (modal as HTMLDialogElement).close();
      }
    }
  };

  const handleConfirmDiscard = () => {
    setTitle("");
    setDescription("");
    setCategories([]);
    setFile(null);
    setCategoryInput("");
    setPreviewImage(undefined);
    setShowConfirmation(false);
    const modal = document.getElementById('my_modal_3');
    if (modal) {
      (modal as HTMLDialogElement).close();
    }
  };

  const filteredSuggestions = categoryInput
    ? suggestions.filter(
        (suggestion) =>
          suggestion.toLowerCase().startsWith(categoryInput.toLowerCase()) &&
          !categories.includes(suggestion)
      )
    : [];

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box w-full max-w-5xl p-6 relative">
        <form method="dialog">
          <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseModal}>✕</button>
        </form>
        <form onSubmit={handleSubmit} className="text-secondary">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex flex-col items-center justify-center text-center">
                <div
                  className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-secondaryDarker/10 rounded-2xl cursor-pointer border-dashed border-2 border-secondaryDarker/25 hover:bg-secondaryDarker/25 transition-all ease-in-out duration-300"
                  onClick={handleIconClick}
                >
                  {previewImage && (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-full h-full rounded-2xl"
                    />
                  )}
                  {!previewImage && (
                    <>
                      <div className="flex flex-col items-center justify-center text-center w-full h-full">
                        <FaImage className="text-[5rem] text-secondaryLight text-secondaryDarker/25" />
                        <h1 className="font-semibold text-secondary/25 text-base">
                          Upload your Image here
                        </h1>
                      </div>
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="m-5">
                <div className="space-y-5">
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full text-2xl font-bold p-2 border bg-transparent border-secondary border-e-0 border-s-0 border-t-0 border-b-2 focus:outline-none focus:border-accent/80"
                  />
                  <textarea
                    className="w-full h-10 sm:h-40 p-2 resize-y bg-primaryDarker100/50 rounded-tl-lg rounded-tr-lg border-secondary border-e-0 border-s-0 border-t-0 border-b-2 focus:outline-none focus:border-accent/80"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Add a category"
                      value={categoryInput}
                      onChange={handleCategoryInput}
                      onKeyDown={handleKeyDown}
                      className="w-full p-2 border bg-transparent border-secondary border-e-0 border-s-0 border-t-0 border-b-2 focus:outline-none focus:border-accent/80"
                    />
                    {categoryInput && filteredSuggestions.length > 0 && (
                      <ul className="absolute bg-white border rounded shadow-lg w-full mt-2">
                        {filteredSuggestions.map((suggestion) => (
                          <li
                            key={suggestion}
                            onClick={() => handleAddCategory(suggestion)}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                          >
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="overflow-x-auto">
                    <div className="w-full flex-nowrap flex overflow-x-auto space-x-2">
                      {categories.map((category) => (
                        <div
                          key={category}
                          className="flex items-center bg-gray-300 text-gray-700 rounded-full px-3 py-1 whitespace-nowrap"
                        >
                          {category}
                          <FaTimes
                            className="ml-2 cursor-pointer"
                            onClick={() => handleRemoveCategory(category)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-2 mt-2">
                  <button
                    type="submit"
                    className="btn p-2 w-20 bg-secondary text-primary rounded-md transition-all ease-in hover:bg-accent"
                    onClick={handleSubmit}
                  >
                    {state.isPending ? <Spinner /> : 'Share'}
                  </button>
                  <button
                    type="button"
                    className="btn p-2 w-20 bg-secondary text-primary rounded-md transition-all ease-in hover:bg-accent"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              {state.error && <p>Error: {state.error}</p>}
              {showSuccessMessage && (
                <div className="toast toast-top toast-center">
                  <div className="alert alert-success">
                    <span>Your image has been uploaded successfully!</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
        {showConfirmation && (
          <div className="modal modal-open">
            <div className="modal-box bg-transparent border-0 shadow-none">
              <Confirmation
                onConfirm={handleConfirmDiscard}
                onCancel={() => setShowConfirmation(false)}
              />
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
};

export default AddImageModal;
