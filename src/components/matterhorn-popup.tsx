import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./matterhorn-popup.module.css";

type MatterhornPopupType = {
  onClose?: () => void;
};

const MatterhornPopup: FunctionComponent<MatterhornPopupType> = ({
  onClose,
}) => {
  return (
    <div className={styles.matterhornPopup}>
      <iframe
        className={styles.video}
        src={`https://www.youtube.com/embed/DJImX19wyLY?rel=0&autoplay=1&mute=1`}
        frameBorder="0"
        allowFullScreen
        title="Matterhorn"
      />
    </div>
  );
};

export default MatterhornPopup;
