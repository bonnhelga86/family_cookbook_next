import { ITooltip } from "@/utils/interfaceList";
import "../Popups/Popup/Popup.scss";

export const Tooltip = ({ popupName, isPopupOpen, children }: ITooltip) => {
  return (
    <div
      className={`popup popup-${popupName} popup_events-none ${
        isPopupOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container popup__container_size_small">
        {children}
      </div>
    </div>
  );
};
