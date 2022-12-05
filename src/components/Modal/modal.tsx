import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type IProps = {
  className?: string;
  el?: string;
  children: React.ReactNode;
};

const modalRoot = document.getElementById('modal-root') as HTMLElement;

export const Modal = ({ children, className, el = 'div' }: IProps) => {
  const [container] = useState(document.createElement(el));

  if (className) container.classList.add(className);

  useEffect(() => {
    modalRoot.appendChild(container);
    document.body.style.overflow = 'hidden';
    return () => {
      modalRoot.removeChild(container);
      document.body.style.overflow = '';
    };
  }, [container]);

  return ReactDOM.createPortal(children, container);
};
