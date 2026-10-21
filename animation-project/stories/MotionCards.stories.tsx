import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MotionCards } from "../components/MotionCards";

const meta: Meta<typeof MotionCards> = {
  title: "Animations/Motion Cards and Drag",
  component: MotionCards,
  decorators: [(Story) => <div style={{ maxWidth: 640, padding: 32 }}><Story /></div>],
};
export default meta;
export const Default: StoryObj<typeof MotionCards> = {};
