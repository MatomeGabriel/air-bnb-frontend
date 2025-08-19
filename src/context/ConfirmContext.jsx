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

// create the context
const ConfirmContext = createContext();

/**
 * Provides confirmation modal logic to the app
 * @param {{children: React.ReactNode}} props
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

export const useConfirm = () => useContext(ConfirmContext);
