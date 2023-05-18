import React from "react";
import style from "./Drawer.module.css";

import { motion } from "framer-motion";
import { IDrawerProps } from "./Drawer.type";

const Drawer: React.FC<IDrawerProps> = ({ children, isOpen, onClose }) => {
  const animationVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const backdropAnimation = {
    open: { opacity: 1, zIndex: "10" },
    closed: { opacity: 0, zIndex: "-10" },
  };

  return (
    <div className={style.container}>
      <motion.div
        className={style.backdrop}
        variants={backdropAnimation}
        onClick={onClose}
        animate={isOpen ? "open" : "closed"}
      />
      <motion.div
        transition={{
          type: "tween",
        }}
        animate={isOpen ? "open" : "closed"}
        variants={animationVariants}
        className={style.content}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Drawer;
