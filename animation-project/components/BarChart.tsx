"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

export type Datum = { label: string; value: number };

type BarChartProps = { data: Datum[]; width?: number; height?: number };

/** D3: scales, axes and bars that animate whenever the data changes. */
export function BarChart({ data, width = 560, height = 300 }: BarChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const margin = { top: 16, right: 16, bottom: 32, left: 40 };

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;

    const x = d3.scaleBand().domain(data.map((d) => d.label)).range([0, innerW]).padding(0.25);
    const y = d3.scaleLinear().domain([0, d3.max(data, (d) => d.value) ?? 1]).nice().range([innerH, 0]);

    const root = svg.selectAll<SVGGElement, null>("g.root").data([null]).join("g").attr("class", "root").attr("transform", `translate(${margin.left},${margin.top})`);

    root.selectAll<SVGGElement, null>("g.x").data([null]).join("g").attr("class", "x").attr("transform", `translate(0,${innerH})`).call(d3.axisBottom(x));
    root.selectAll<SVGGElement, null>("g.y").data([null]).join("g").attr("class", "y").transition().duration(600).call(d3.axisLeft(y).ticks(5));

    root
      .selectAll<SVGRectElement, Datum>("rect")
      .data(data, (d) => d.label)
      .join(
        (enter) => enter.append("rect").attr("x", (d) => x(d.label)!).attr("width", x.bandwidth()).attr("y", innerH).attr("height", 0).attr("rx", 6).attr("fill", "#2563eb"),
        (update) => update,
        (exit) => exit.transition().duration(300).attr("y", innerH).attr("height", 0).remove(),
      )
      .transition()
      .duration(700)
      .ease(d3.easeCubicOut)
      .attr("x", (d) => x(d.label)!)
      .attr("width", x.bandwidth())
      .attr("y", (d) => y(d.value))
      .attr("height", (d) => innerH - y(d.value));
  }, [data, width, height]); // eslint-disable-line react-hooks/exhaustive-deps

  return <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`} width="100%" role="img" aria-label="Bar chart" style={{ maxWidth: width, color: "#52525b" }} />;
}
