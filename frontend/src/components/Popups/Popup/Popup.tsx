"use client";

import { FC, useEffect, ReactNode } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { setPopupType } from "@/lib/slices/popupSlice";
import "./Popup.scss";

interface IPopupProps {
  size: string;
  popupName: string;
  isPopupOpen: boolean;
  children: ReactNode;
}

export const Popup: FC<IPopupProps> = ({
  size,
  popupName,
  isPopupOpen,
  children,
}) => {
  const dispatch = useAppDispatch();

  function closePopup() {
    dispatch(setPopupType(null));
  }

  function handleCloseClick(event: React.MouseEvent<HTMLElement>) {
    const target = event.target as Element;
    if (
      target.classList.contains("popup") ||
      target.classList.contains("popup__close")
    ) {
      closePopup();
    }
  }

  useEffect(() => {
    if (!isPopupOpen) return;

    const handleEscClose = (event) => {
      if (event.key === "Escape") closePopup();
    };

    document.addEventListener("keyup", handleEscClose);

    return () => {
      document.removeEventListener("keyup", handleEscClose);
    };
  }, [isPopupOpen]);

  return (
    <div
      className={`popup popup-${popupName} ${
        isPopupOpen ? "popup_opened" : ""
      }`}
      onClick={handleCloseClick}
    >
      <div className={`popup__container popup__container_size_${size}`}>
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={handleCloseClick}
        />
        {children}
      </div>
    </div>
  );
};
