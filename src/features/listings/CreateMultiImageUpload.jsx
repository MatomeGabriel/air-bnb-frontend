import { useDropzone } from "react-dropzone";
import { useState, useCallback } from "react";
import { useEffect } from "react";

const CreateMultiImageUpload = ({ images, setImages }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const previews = acceptedFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setImages((prev) => [...prev, ...previews]);
    },
    [setImages]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  const removeImage = (index, e) => {
    e.preventDefault();
    setImages((prev) => {
      const update = [...prev];
      URL.revokeObjectURL(update[index].preview);
      update.splice(index, 1);
      return update;
    });
  };

  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.preview));
    };
  }, [images]);

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #ccc",
          padding: "2rem",
          borderRadius: "8px",
          textAlign: "center",
          backgroundColor: isDragActive ? "#f0f8ff" : "#fafafa",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        <p>Drag & drop images here, or click to select</p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {images.map((img, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={img.preview}
              alt={`Preview ${index}`}
              style={{ width: "150px", borderRadius: "6px" }}
            />
            <button
              onClick={(e) => removeImage(index, e)}
              style={{
                position: "absolute",
                top: "4px",
                right: "4px",
                background: "rgba(0,0,0,0.6)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateMultiImageUpload;
