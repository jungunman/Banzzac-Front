import type { Meta, StoryObj } from "@storybook/react";
import { DoubleProfileImage } from "./ProfileImage";
import Mangu from "@assets/images/mangu.jpg";
import Mangu2 from "@assets/images/mangu2.jpg";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/ProfileImage/DoubleProfileImage",
  component: DoubleProfileImage,
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
} satisfies Meta<typeof DoubleProfileImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDoubleImage: Story = {
  args: {
    size: 80,
    border: 3,
    left: 60,
    img: Mangu,
    img2: Mangu2,
  },
};
