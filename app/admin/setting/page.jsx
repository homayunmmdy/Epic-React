"use client"
import useStore from "@/app/store/store";
import { useEffect, useState } from "react";

const SettingPage = () => {
  const { websiteName, setWebsiteName } = useStore((state) => ({
    websiteName: state.websiteName,
    setWebsiteName: state.setWebsiteName,
  }));
  const [inputValue, setInputValue] = useState(''); 
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setInputValue(websiteName);
  }, [websiteName]);

  const handleSave = () => {
    setWebsiteName(inputValue);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000); // Hide alert after 2 seconds
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">Admin Page</h1>
        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="Enter website name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded w-full mb-2"
          onClick={handleSave}
        >
          Save
        </button>
        {showSuccess && (
          <div className="bg-green-500 text-white p-2 rounded">
            Website name saved successfully!
          </div>
        )}
        <h2 className="text-lg font-semibold mt-4">Current Website Name:</h2>
        <p className="text-gray-700">{websiteName || 'No name set'}</p>
      </div>
    </div>
  );
}

export default SettingPage