"use client";

import { motion } from "motion/react";
import { useRef } from "react";

const items = ["Discover", "Define", "Design", "Deliver"];

/** Motion: cards stagger in, and one card can be dragged inside its box. */
export function MotionCards() {
  const bounds = useRef<HTMLDivElement>(null);

  return (
    <div style={{ display: "grid", gap: 24 }}>
      <motion.ul
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 12, listStyle: "none", padding: 0, margin: 0 }}
      >
        {items.map((label) => (
          <motion.li
            key={label}
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.05 }}
            style={{ padding: 20, borderRadius: 14, background: "#eef2ff", color: "#1e1b4b", fontWeight: 600, textAlign: "center" }}
          >
            {label}
          </motion.li>
        ))}
      </motion.ul>

      <div
        ref={bounds}
        style={{ height: 220, borderRadius: 16, border: "2px dashed #c7d2fe", position: "relative", overflow: "hidden", background: "#fafafa" }}
      >
        <motion.div
          drag
          dragConstraints={bounds}
          dragElastic={0.2}
          whileDrag={{ scale: 1.08, rotate: 3 }}
          whileTap={{ cursor: "grabbing" }}
          style={{ width: 140, height: 90, margin: 24, borderRadius: 14, background: "#4f46e5", color: "#fff", display: "grid", placeItems: "center", fontWeight: 600, cursor: "grab", userSelect: "none" }}
        >
          Drag me
        </motion.div>
      </div>
    </div>
  );
}
