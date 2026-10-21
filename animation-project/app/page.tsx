import { HoverCard } from "@/components/HoverCard";
import { MotionCards } from "@/components/MotionCards";
import { Gears } from "@/components/Gears";
import { ChartDemo } from "@/components/ChartDemo";

const sections = [
  { id: "css", label: "CSS", title: "Motion with no library", note: "A transition on hover and a looping @keyframes pulse." },
  { id: "motion", label: "Motion", title: "Animate components and drag", note: "Cards stagger in with variants. Drag the purple card around its box." },
  { id: "r3f", label: "React Three Fiber", title: "3D gears that turn as you scroll", note: "Two meshing gears built from React components. Scroll the page to drive them." },
  { id: "d3", label: "D3", title: "A chart that animates when its data changes", note: "Scales, axes and bars from D3. Shuffle to see the transition." },
];

export default function Home() {
  return (
    <main style={{ maxWidth: 880, margin: "0 auto", padding: "64px 20px 160px", display: "grid", gap: 72 }}>
      <header style={{ display: "grid", gap: 12 }}>
        <p style={{ fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2563eb", fontWeight: 600, margin: 0 }}>CT390 · Week 8 · Animation lab</p>
        <h1 style={{ fontSize: 44, lineHeight: 1.1, fontWeight: 700, margin: 0 }}>Four ways to add motion to a React app</h1>
        <p style={{ fontSize: 17, color: "#71717a", margin: 0 }}>Elijah Cruzado. Each demo is a component with its own Storybook story.</p>
        <nav style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} style={{ padding: "6px 12px", borderRadius: 999, border: "1px solid #d4d4d8", fontSize: 14 }}>{s.label}</a>
          ))}
        </nav>
      </header>

      {sections.map((s) => (
        <section key={s.id} id={s.id} style={{ display: "grid", gap: 16, scrollMarginTop: 24 }}>
          <div>
            <p style={{ fontSize: 13, color: "#2563eb", fontWeight: 600, margin: "0 0 4px" }}>{s.label}</p>
            <h2 style={{ fontSize: 26, fontWeight: 650, margin: "0 0 6px" }}>{s.title}</h2>
            <p style={{ color: "#71717a", margin: 0 }}>{s.note}</p>
          </div>
          {s.id === "css" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
              <HoverCard title="Transition" body="Hover me. Transform and shadow ease over 240ms." />
              <HoverCard title="Keyframes" body="The dot in the corner loops forever with @keyframes." />
              <HoverCard title="Reduced motion" body="Both turn off when the OS asks for reduced motion." />
            </div>
          )}
          {s.id === "motion" && <MotionCards />}
          {s.id === "r3f" && <Gears />}
          {s.id === "d3" && <ChartDemo />}
        </section>
      ))}
    </main>
  );
}
