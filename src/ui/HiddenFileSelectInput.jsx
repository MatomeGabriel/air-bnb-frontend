import { useRef } from "react";

const HiddenFileSelectInput = ({ onChange = () => {}, children }) => {
  const inputRef = useRef(null);

  const triggerInput = () => {
    inputRef?.current?.click();
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={onChange}
      />
      {children}
    </>
  );
};

export default HiddenFileSelectInput;
