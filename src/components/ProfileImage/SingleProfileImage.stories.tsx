import type { Meta, StoryObj } from "@storybook/react";
import { SingleProfileImage } from "./ProfileImage";
import Mangu from "@assets/images/mangu.jpg";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/ProfileImage/SingleProfileImage",
  component: SingleProfileImage,
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
} satisfies Meta<typeof SingleProfileImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDoubleImage: Story = {
  args: {
    size: 100,
    border: 3,
    img: Mangu,
    borderColor: "black",
  },
};
