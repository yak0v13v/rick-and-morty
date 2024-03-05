import { normalizeData } from "../normalizeData";

describe("normalizeData", () => {
  const arr = [
    { id: 1, name: "John" },
    { id: 2, name: "Donk" },
  ];

  test("default case", () => {
    const normalized = normalizeData(arr, (item) => item.id);

    expect(normalized).toEqual({
      data: { 1: { id: 1, name: "John" }, 2: { id: 2, name: "Donk" } },
      ids: [1, 2],
    });
  });

  test("case with modify", () => {
    const normalized = normalizeData(
      arr,
      (item) => item.id,
      ({ name }) => name
    );

    expect(normalized).toEqual({
      data: { 1: "John", 2: "Donk" },
      ids: [1, 2],
    });
  });
});
