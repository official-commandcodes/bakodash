import { createPortal } from 'react-dom';
import {
  cloneElement,
  createContext,
  useContext,
  useState,
} from 'react';
import { HiXMark } from 'react-icons/hi2';

import { useClickOutside } from '../hooks/useClickOutside';

import Overlay from './Overlay';
import ButtonIcon from './ButtonIcon';

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
  const { openName, close } = useContext(ModalContext);

  const { ref } = useClickOutside({ openName, close, windowName });

  if (windowName !== openName) return null;

  return createPortal(
    <Overlay refName={ref}>
      <div className="bg-blue-50 rounded-md py-2 px-5 grid justify-items-stretch gap-3">
        <ButtonIcon onClick={close}>
          <HiXMark />
        </ButtonIcon>

        {cloneElement(children, {
          onCloseModal: () => close(),
        })}
      </div>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
