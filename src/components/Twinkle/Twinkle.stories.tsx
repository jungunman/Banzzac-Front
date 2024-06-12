import type { Meta, StoryObj } from "@storybook/react";
import Twinkle from "./Twinkle";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/Range/Twinkle",
  component: Twinkle,
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
} satisfies Meta<typeof Twinkle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTwinkle: Story = {
  args: {
    isClick: false,
    size: 30,
    avg: 23,
  },
};

export const SettingRange: Story = {
  args: {
    isClick: true,
    size: 50,
    avg: 20,
  },
};
