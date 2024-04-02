"use client";
import React, { useEffect, useId, useState } from "react";
import clsx from "clsx";
import { Play, Pause, RotateCcw } from "react-feather";

import Card from "@/components/Card";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./CircularColorsDemo.module.css";
import { motion } from "framer-motion";
const COLORS = [
  { label: "red", value: "hsl(348deg 100% 60%)" },
  { label: "yellow", value: "hsl(50deg 100% 55%)" },
  { label: "blue", value: "hsl(235deg 100% 65%)" },
];

function CircularColorsDemo() {
  // TODO: This value should increase by 1 every second:
  // const timeElapsed = 0;
  const [timeElapsed, setTimeElapsed] = useState(6);

  const [isPlaying, setIsPlaying] = useState(false);

  const id = useId();

  // TODO: This value should cycle through the colors in the
  // COLORS array:
  const selectedColor = COLORS[timeElapsed % COLORS.length];

  useEffect(() => {
    if (isPlaying) {
      const id = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);

      return () => {
        clearInterval(id);
      };
    }
  }, [isPlaying]);

  return (
    <Card as="section" className={styles.wrapper}>
      <ul className={styles.colorsWrapper}>
        {COLORS.map((color, index) => {
          const isSelected = color.value === selectedColor.value;

          return (
            <li className={styles.color} key={index}>
              {isSelected && (
                <motion.div
                  layoutId={`${id}-${index}`}
                  className={styles.selectedColorOutline}
                />
              )}
              <div
                className={clsx(
                  styles.colorBox,
                  isSelected && styles.selectedColorBox
                )}
                style={{
                  backgroundColor: color.value,
                }}
              >
                <VisuallyHidden>{color.label}</VisuallyHidden>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.timeWrapper}>
        <dl className={styles.timeDisplay}>
          <dt>Time Elapsed</dt>
          <dd>{timeElapsed}</dd>
        </dl>
        <div className={styles.actions}>
          <button onClick={() => setIsPlaying((prev) => !prev)}>
            {!isPlaying ? <Play /> : <Pause />}
            <VisuallyHidden>Play</VisuallyHidden>
          </button>
          <button
            onClick={() => {
              setTimeElapsed(0);
              setIsPlaying(false);
            }}
          >
            <RotateCcw />
            <VisuallyHidden>Reset</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CircularColorsDemo;
