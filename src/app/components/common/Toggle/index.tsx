"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./styles.css";
import { GridIcon, ListIcon } from "../../../assets/svg";

type Props = {
  variant?: "blue" | "red";
};

export const Toggle = ({ variant = "blue" }: Props) => {
  const [type, setType] = useState<"grid" | "list">("grid");

  const onToggle = () =>
    setType((oldState) => (oldState === "grid" ? "list" : "grid"));

  return (
    <div className={`toggle ${type}`} onClick={onToggle}>
      <Image
        className="grid-image"
        src={GridIcon}
        width={12}
        height={12}
        alt="Grid Item"
      />
      <div className={`toggle-indicator ${variant}`} />
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
