type CommonProps = {
  size?: "l" | "m" | "s";
  view?: "danger" | "outline" | "primary";
  width?: "auto" | "max";
};

export type ButtonProps = (
  | (React.ComponentProps<"a"> & {
      as: "link";
    })
  | (React.ComponentProps<"button"> & {
      as?: "button";
      href?: undefined;
    })
) &
  CommonProps;
