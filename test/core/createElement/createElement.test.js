import { createElement as h } from "../../../src/core/createElement/createElement";

it("renders a simple div", () => {
  const tree = h("div");
  expect(tree).toMatchInlineSnapshot(`<div />`);
});

it("renders a div with props", () => {
  const tree = h("div", {id: 'myDiv'});

  const template = `
<div
  id="myDiv"
/>
`;

  expect(tree).toMatchInlineSnapshot(template);
});

it("renders a div with props and a string in it", () => {
  const tree = h("div", {id: 'myDiv'}, 'Hello World');

  const template = `
<div
  id="myDiv"
>
  Hello World
</div>
`;

  expect(tree).toMatchInlineSnapshot(template);
});

it("renders a div with props and a string and a child in it", () => {
  const tree = h("div", {id: 'myDiv'}, 'Hello World', h('p', null, 'another Hello'));

  const template = `
<div
  id="myDiv"
>
  Hello World
  <p>
    another Hello
  </p>
</div>
`;

  expect(tree).toMatchInlineSnapshot(template);
});


it("render a custom element with mulitple props and childs", () => {
  const tree = h("custom-element", {id: 'myDiv', class: 'myClass'}, 'Hello World', h('p', null, 'another Hello'));

  const template = `
<custom-element
  class="myClass"
  id="myDiv"
>
  Hello World
  <p>
    another Hello
  </p>
</custom-element>
`;

  expect(tree).toMatchInlineSnapshot(template);
});
