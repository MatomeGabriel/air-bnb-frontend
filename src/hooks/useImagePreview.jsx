import { useState } from "react";
import toast from "react-hot-toast";

/**
 * Custom hook to handle image preview
 * @returns
 */
const useImagePreview = () => {
  const [previewSrc, setPreviewSrc] = useState(null);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);

  const readFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFile(file);

    // create a new file reader
    const reader = new FileReader();
    reader.onload = () => setPreviewSrc(reader.result);
    reader.onerror = () => {
      setError("Failed to read file");
      toast.error("Failed to read file, try again");
    };
    reader.readAsDataURL(file);
  };
  return { readFile, error, previewSrc, file, setPreviewSrc };
};

export default useImagePreview;
