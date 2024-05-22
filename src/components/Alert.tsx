import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      >
        <span aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default Alert;
