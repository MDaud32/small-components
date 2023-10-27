import ReactDom from "react-dom";
const Modal = ({ show, children, actionBar }) => {
  return ReactDom.createPortal(
    <div>
      <div
        onClick={show}
        className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absolute inset-40 p-10 bg-white">
        {children}
        {actionBar}
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
