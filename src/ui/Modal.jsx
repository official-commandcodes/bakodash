import { createPortal } from 'react-dom';
import {
  cloneElement,
  createContext,
  useContext,
  useState,
} from 'react';
import { HiXMark } from 'react-icons/hi2';
import Overlay from './Overlay';
import Button from './Button';

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
};

function Open({ children, buttonName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => open(buttonName),
  });
}

function Window({ children, windowName }) {
  const { openName } = useContext(ModalContext);

  if (windowName !== openName) return null;

  return createPortal(
    <Overlay>
      <div className="h-screen flex justify-center items-center">
        <div className="w-2/4 bg-red-400 rounded-md p-2 grid justify-items-stretch gap-3">
          <Button onClick={close}>
            <HiXMark />
          </Button>

          <div>{cloneElement(children, {})}</div>
        </div>
      </div>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
