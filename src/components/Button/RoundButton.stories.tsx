import type { Meta, StoryObj } from "@storybook/react";
import RoundButton from "./RoundButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/Button/RoundButton",
  component: RoundButton,
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
} satisfies Meta<typeof RoundButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    title: "button",
    fill: false,
    backgroundColor: "black",
  },
};

export const FilledButton: Story = {
  args: {
    title: "filled button",
    fill: true,
    backgroundColor: "gray",
  },
};

export const LongTxtButton: Story = {
  args: {
    title: "longlonglonglonglonglonglonglonglonglonglonglonglongtxt",
    fill: false,
    backgroundColor: "red",
  },
};
