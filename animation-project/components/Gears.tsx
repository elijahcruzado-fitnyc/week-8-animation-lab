"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { Group } from "three";

type GearProps = { position: [number, number, number]; radius: number; teeth: number; color: string; direction: 1 | -1 };

function Gear({ position, radius, teeth, color, direction, progress }: GearProps & { progress: React.RefObject<number> }) {
  const group = useRef<Group>(null);
  const scrolled = useRef(0);
  useFrame(({ clock }, delta) => {
    if (!group.current) return;
    // ease toward the scroll position, then add a slow idle spin.
    // Dividing by radius keeps the teeth of the two gears in step.
    scrolled.current += (progress.current - scrolled.current) * Math.min(1, delta * 6);
    group.current.rotation.z = (direction * (clock.elapsedTime * 0.4 + scrolled.current * Math.PI * 6)) / radius;
  });
  return (
    <group ref={group} position={position}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[radius, radius, 0.4, 48]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.35} />
      </mesh>
      {Array.from({ length: teeth }).map((_, i) => {
        const a = (i / teeth) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(a) * (radius + 0.12), Math.sin(a) * (radius + 0.12), 0]} rotation={[0, 0, a]}>
            <boxGeometry args={[0.28, 0.22, 0.4]} />
            <meshStandardMaterial color={color} metalness={0.5} roughness={0.35} />
          </mesh>
        );
      })}
    </group>
  );
}

/** React Three Fiber: two meshing gears that turn as you scroll. */
export function Gears({ height = 360 }: { height?: number }) {
  const progress = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current = max > 0 ? window.scrollY / max : 0;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ height, borderRadius: 16, overflow: "hidden", background: "#0f172a" }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 5]} intensity={1.4} />
        <group rotation={[-0.35, 0.3, 0]}>
          <Gear position={[-1.1, 0, 0]} radius={1.2} teeth={16} color="#f59e0b" direction={1} progress={progress} />
          <Gear position={[1.18, 0.15, 0]} radius={0.85} teeth={11} color="#38bdf8" direction={-1} progress={progress} />
        </group>
      </Canvas>
    </div>
  );
}
