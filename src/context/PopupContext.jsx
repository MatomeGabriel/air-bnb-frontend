import { createContext, useCallback, useContext, useState } from "react";
import styled from "styled-components";

/**
 * Context for managing popup/modal logic across the app.
 * Provides functions to open and close popups with custom components.
 */
const PopupContext = createContext();
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
/**
 * Provider component for PopupContext.
 * Provides popup/modal logic and renders custom components in an overlay.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Child components
 * @param {React.ComponentType} [props.component] - Optional initial component to render
 * @returns {JSX.Element}
 */
export const PopupProvider = ({ children, component }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ComponentToRender, setComponentToRender] = useState(null);

  const openPopup = useCallback((Component) => {
    setIsOpen(true);
    setComponentToRender(() => Component);
  }, []);

  const closePopup = useCallback(() => {
    setIsOpen(false);
    setComponentToRender(null);
  }, []);

  return (
    <PopupContext.Provider value={{ closePopup, openPopup }}>
      <>
        {children}
        {isOpen && ComponentToRender && (
          <Overlay onClick={closePopup}>
            <div onClick={(e) => e.stopPropagation()}>
              <ComponentToRender />
            </div>
          </Overlay>
        )}
      </>
    </PopupContext.Provider>
  );
};

/**
 * Custom hook to access popup context.
 * @returns {object} Popup context value
 */
export const usePopup = () => useContext(PopupContext);
