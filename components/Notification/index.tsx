import React from "react";
import style from "./Notification.module.css";
import { AnimatePresence, motion } from "framer-motion";

type INotification = {
  children: React.ReactNode;
  isVisible: boolean;
  onClose: (isVisible: boolean) => void;
};

const Notification: React.FC<INotification> = ({
  children,
  isVisible,
  onClose,
}) => {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onClose(false);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isVisible]);

  return (
    <>
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: "100%" }}
            className={style.container}
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Notification;
