import { createContext, useContext, useState } from "react";
import ConfirmModal from "../ui/ConfirmModal";

/**
 * @typedef {Object} confirmOptions
 * @property {String} [message]
 * @property {String} [warningTitle]
 * @property {String} [warningMessage]
 * @property {function} [onConfirm]
 * @property {function} [onCancel]
 *
 */

/**
 * Context for managing confirmation modal logic across the app.
 * Provides a function to request confirmation with custom options.
 */
const ConfirmContext = createContext();

/**
 * Provider component for ConfirmContext.
 * Provides confirmation modal logic and renders ConfirmModal when needed.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element}
 */
export const ConfirmProvider = ({ children }) => {
  /**
   * @type {[confirmOptions || null, function]}
   */
  const [confirmState, setConfirmState] = useState();

  //   Trigger the modal with options
  const requestConfirm = (confirmOptions) => {
    setConfirmState(confirmOptions);
  };

  //   Handle confirmation
  const handleConfirm = () => {
    if (confirmState?.onConfirm) confirmState.onConfirm();
    setConfirmState(null);
  };

  //Handle cancellation
  const handleCancel = () => {
    if (confirmState?.onCancel) confirmState.onCancel();
    setConfirmState(null);
  };

  return (
    <ConfirmContext.Provider value={{ requestConfirm }}>
      {children}
      {confirmState && (
        <ConfirmModal
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          message={confirmState.message}
          warningMessage={confirmState?.warningMessage}
          warningTitle={confirmState?.warningTitle}
        />
      )}
    </ConfirmContext.Provider>
  );
};

/**
 * Custom hook to access confirm context.
 * @returns {object} Confirm context value
 */
export const useConfirm = () => useContext(ConfirmContext);
