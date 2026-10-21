import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Gears } from "../components/Gears";

const meta: Meta<typeof Gears> = {
  title: "Animations/React Three Fiber Gears",
  component: Gears,
  args: { height: 360 },
  decorators: [(Story) => <div style={{ maxWidth: 640, padding: 32 }}><Story /></div>],
};
export default meta;
export const Default: StoryObj<typeof Gears> = {};
