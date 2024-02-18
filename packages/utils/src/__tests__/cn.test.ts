import { cn } from "../cn";

describe("cn", () => {
  test("classNames are concatenated correctly", () => {
    const classes = cn(
      "first",
      "second",
      true && "third",
      false && "fourth",
      null && "fifth",
      undefined && "sixth"
    );
    expect(classes).toBe("first second third");
  });
});
