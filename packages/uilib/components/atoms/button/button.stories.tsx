import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta = {
  title: "UIKit/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Inject className",
      type: "string",
    },
    width: {
      description: "Width of component",
      defaultValue: "auto",
      type: {
        name: "enum",
        value: ["auto", "max"],
      },
    },
    disabled: {
      defaultValue: false,
      type: {
        name: "boolean",
      },
    },
    view: {
      description: "Design of component",
      defaultValue: "primary",
      type: {
        name: "enum",
        value: ["primary", "outline", "danger"],
      },
    },
    size: {
      description: "Size of component",
      defaultValue: "m",
      type: {
        name: "enum",
        value: ["s", "m", "l"],
      },
    },
    as: {
      description: "Use button component as link",
      defaultValue: "button",
      type: {
        name: "enum",
        value: ["button", "link"],
      },
    },
    href: {
      description: "Link to external resource",
      if: { arg: "as", eq: "link" },
      type: "string",
    },
    target: {
      description: "Default value: _blank",
      defaultValue: "_blank",
      if: { arg: "as", eq: "link" },
      type: "string",
    },
    rel: {
      description: "Default value: noopener noreferrer",
      defaultValue: "noopener noreferrer",
      if: { arg: "as", eq: "link" },
      type: "string",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "This is Primary btn",
    size: "m",
    view: "primary",
    width: "auto",
  },
};

export const Outline: Story = {
  args: {
    children: "This is Outline btn",
    size: "m",
    view: "outline",
    width: "auto",
  },
};

export const Danger: Story = {
  args: {
    children: "This is Danger btn",
    size: "m",
    view: "danger",
    width: "auto",
  },
};

export const Link: Story = {
  args: {
    children: "This is a Link",
    size: "l",
    view: "outline",
    width: "auto",
    as: "link",
    href: "https://google.com/",
  },
};
