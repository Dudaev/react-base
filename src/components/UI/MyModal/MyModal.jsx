import React from "react";
import classes from "./MyModal.module.css";
function MyModal({ visible, setVisible, children }) {
  let styles = [classes.wrapper];
  if (visible) styles.push(classes.active);

  return (
    <div className={styles.join(" ")} onClick={() => setVisible(false)}>
      <div className={classes.box} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default MyModal;
