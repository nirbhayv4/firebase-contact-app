import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="grid place-items-center backdrop-blur h-screen w-screen absolute top-0 z-40">
          <div className="relative z-50 m-auto  min-h-[200px] min-w-[50%] bg-white p-4 rounded-md">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl " />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
