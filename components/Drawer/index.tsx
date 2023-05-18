import React from "react";
import style from "./Drawer.module.css";

import { AnimatePresence, motion } from "framer-motion";
import { IDrawerProps } from "./Drawer.type";

const Drawer: React.FC<IDrawerProps> = ({ children, isOpen, onClose }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen ? (
          <div className={style.container}>
            <motion.div
              className={style.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
            <motion.div
              transition={{
                type: "tween",
              }}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              className={style.content}
            >
              {children}
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Drawer;
