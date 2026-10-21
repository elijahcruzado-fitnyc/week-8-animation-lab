"use client";

import { useState } from "react";
import { BarChart, type Datum } from "./BarChart";

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const randomData = (): Datum[] => labels.map((label) => ({ label, value: Math.round(10 + Math.random() * 90) }));
const initial: Datum[] = [
  { label: "Mon", value: 42 },
  { label: "Tue", value: 68 },
  { label: "Wed", value: 35 },
  { label: "Thu", value: 81 },
  { label: "Fri", value: 57 },
];

/** Wraps BarChart with a button that swaps in new data so the transition plays. */
export function ChartDemo() {
  const [data, setData] = useState<Datum[]>(initial);
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <BarChart data={data} />
      <button
        type="button"
        onClick={() => setData(randomData())}
        style={{ justifySelf: "start", padding: "10px 16px", borderRadius: 999, background: "#171717", color: "#fff", fontWeight: 600, border: 0, cursor: "pointer" }}
      >
        Shuffle data
      </button>
    </div>
  );
}
