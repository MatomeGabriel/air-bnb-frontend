import { useState } from "react";
import toast from "react-hot-toast";

/**
 * useImagePreview
 * Custom hook for handling image file selection and preview rendering.
 * Uses FileReader to convert selected image into a base64 preview.
 *
 * @returns {Object} - Contains:
 *   - readFile: Function to handle file input change and generate preview
 *   - error: Error message if file reading fails
 *   - previewSrc: Base64 string of the selected image for preview
 *   - file: Original File object selected by the user
 *   - setPreviewSrc: Setter to manually update previewSrc if needed
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
