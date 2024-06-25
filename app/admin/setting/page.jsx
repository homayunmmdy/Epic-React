"use client"
import useStore from "@/app/store/store";
import { useEffect, useState } from "react";

const SettingPage = () => {
  const { websiteData, setWebsiteData, addSocialMedia } = useStore((state) => ({
    websiteData: state.websiteData,
    setWebsiteData: state.setWebsiteData,
    addSocialMedia: state.addSocialMedia,
  }));
  const [formValues, setFormValues] = useState({ ...websiteData });
  const [showSuccess, setShowSuccess] = useState(false);
  const [socialMedia, setSocialMedia] = useState({ name: '', address: '' });

  useEffect(() => {
    setFormValues({ ...websiteData });
  }, [websiteData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setWebsiteData(name, reader.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSave = () => {
    Object.keys(formValues).forEach((key) => {
      setWebsiteData(key, formValues[key]);
    });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const handleAddSocialMedia = () => {
    addSocialMedia(socialMedia.name, socialMedia.address);
    setSocialMedia({ name: '', address: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-xl text-center font-bold mb-4">Setting</h1>
        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="Website Name"
          name="websiteName"
          value={formValues.websiteName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="Description"
          name="description"
          value={formValues.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="Site URL"
          name="siteUrl"
          value={formValues.siteUrl}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="Keywords"
          name="keywords"
          value={formValues.keywords}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="Author"
          name="author"
          value={formValues.author}
          onChange={handleInputChange}
        />
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Logo</label>
          <input
            type="file"
            name="logo"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Favicon</label>
          <input
            type="file"
            name="favicon"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Social Media</label>
          <input
            type="text"
            className="border p-2 w-full mb-2"
            placeholder="Name"
            value={socialMedia.name}
            onChange={(e) => setSocialMedia({ ...socialMedia, name: e.target.value })}
          />
          <input
            type="text"
            className="border p-2 w-full mb-2"
            placeholder="Address"
            value={socialMedia.address}
            onChange={(e) => setSocialMedia({ ...socialMedia, address: e.target.value })}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded w-full mb-2"
            onClick={handleAddSocialMedia}
          >
            Add Social Media
          </button>
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded w-full mb-2"
          onClick={handleSave}
        >
          Save
        </button>
        {showSuccess && (
          <div className="bg-green-500 text-white p-2 rounded">
            Website data saved successfully!
          </div>
        )}
        <h2 className="text-lg font-semibold mt-4">Current Website Data:</h2>
        <pre className="text-gray-700 text-sm">
          {JSON.stringify(websiteData, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default SettingPage