import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HoverCard } from "../components/HoverCard";

const meta: Meta<typeof HoverCard> = {
  title: "Animations/CSS Hover Card",
  component: HoverCard,
  args: { title: "CSS transition", body: "Hover or tab to this card. The dot loops with @keyframes." },
  decorators: [(Story) => <div style={{ maxWidth: 320, padding: 32 }}><Story /></div>],
};
export default meta;
export const Default: StoryObj<typeof HoverCard> = {};
