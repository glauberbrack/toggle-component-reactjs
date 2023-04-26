"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./styles.css";
import { GridIcon, ListIcon } from "../../../assets/svg";

type Props = {
  variant?: "blue" | "red";
};

export const Switch = ({ variant = "blue" }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [type, setType] = useState<"grid" | "list">("grid");

  const onToggle = () =>
    setType((oldState) => (oldState === "grid" ? "list" : "grid"));

  const handleToggle = () => {
    onToggle();
    setIsChecked(!isChecked);
  };

  return (
    <div className={`switch ${type}`} onClick={handleToggle}>
      <Image
        className="grid-image"
        src={GridIcon}
        width={12}
        height={12}
        alt="Grid Item"
      />
      <div className={`switch-indicator ${variant}`} />
      <Image
        className="list-image"
        src={ListIcon}
        width={12}
        height={12}
        alt="List Item"
      />
    </div>
  );
};
