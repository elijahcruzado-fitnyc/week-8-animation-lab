import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BarChart } from "../components/BarChart";
import { ChartDemo } from "../components/ChartDemo";

const meta: Meta<typeof BarChart> = {
  title: "Animations/D3 Bar Chart",
  component: BarChart,
  args: {
    data: [
      { label: "Mon", value: 42 },
      { label: "Tue", value: 68 },
      { label: "Wed", value: 35 },
      { label: "Thu", value: 81 },
      { label: "Fri", value: 57 },
    ],
  },
  decorators: [(Story) => <div style={{ maxWidth: 640, padding: 32 }}><Story /></div>],
};
export default meta;
export const Static: StoryObj<typeof BarChart> = {};
export const WithShuffle: StoryObj<typeof BarChart> = { render: () => <ChartDemo /> };
