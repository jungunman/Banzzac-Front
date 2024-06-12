import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ButtonSelect from "./ButtonSelect";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "components/Input/ButtonSelect",
  component: ButtonSelect,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChangeButton: fn() },
} satisfies Meta<typeof ButtonSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultButtonSelect: Story = {
  args: {
    label: "성별",
    buttonList: ["남자", "여자"],
    isDuplicate: false,
    maxSelection: 1,
    value: [],
  },
};

export const MBTIButton: Story = {
  args: {
    label: "MBTI",
    buttonList: ["E", "S", "F", "J", "I", "N", "T", "P"],
    isDuplicate: true,
    maxSelection: 4,
    gridStyle: {
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "4px",
    },
    value: [],
  },
};

export const WalkButton: Story = {
  args: {
    label: "산책 스타일",
    buttonList: [
      "많이 걷는",
      "앉아서 쉬는",
      "대화를 하는",
      "대화가 적은",
      "산책이 능숙한",
    ],
    isDuplicate: false,
    maxSelection: 1,
    value: [],
    gridStyle: {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "10px",
    },
  },
};

export const BreedButton: Story = {
  args: {
    label: "견종",
    buttonList: [
      "믹스",
      "말티즈",
      "푸들",
      "포메라니안",
      "치와와",
      "시츄",
      "골든리트리버",
      "진돗개",
      "비글",
    ],
    isDuplicate: false,
    maxSelection: 1,
    value: [],
    gridStyle: {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "10px",
    },
  },
};
