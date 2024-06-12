import type { Meta, StoryObj } from "@storybook/react";
import TemperatureBar from "./TemperatureBar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TemperatureBar> = {
  title: "components/Range/TemperatureBar",
  component: TemperatureBar,
  decorators: [
    (Story) => {
      return (
        <div style={{ width: "300px" }}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // txt: { type: "string" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof TemperatureBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTemperature: Story = {
  args: {
    point: 76.2,
  },
};
