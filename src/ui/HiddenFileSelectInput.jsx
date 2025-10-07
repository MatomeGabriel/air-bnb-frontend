import { useRef } from "react";

/**
 * HiddenFileSelectInput
 * Wraps a hidden file input and exposes a trigger function via ref.
 * Useful for custom file upload buttons or UI elements.
 *
 * @param {Object} props
 * @param {Function} [props.onChange] - Callback when a file is selected.
 * @param {React.ReactNode} props.children - UI element(s) that will trigger the file input.
 * @returns {JSX.Element}
 */

const HiddenFileSelectInput = ({ onChange = () => {}, children }) => {
  const inputRef = useRef(null);

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
