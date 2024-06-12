import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/Badge",
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    txt: { type: "string" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { txt: "txt" },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultBadge: Story = {
  args: {
    txt: "mbti",
    bold: false,
    gradient: false,
  },
};

export const BoldBadge: Story = {
  args: {
    txt: "많이 걷는",
    bold: true,
    gradient: false,
  },
};

export const GradientBadge: Story = {
  args: {
    txt: "36.5",
    bold: false,
    gradient: true,
  },
};
