import { createElement as h } from "../../../src/core/createElement/createElement";

it("renders correctly", () => {
  const tree = h("div");
  expect(tree).toMatchInlineSnapshot(`<div />`);
});

it("renders not correctly", () => {
  const tree = h("div");
  expect(tree).toMatchInlineSnapshot(`<p />`);
});
