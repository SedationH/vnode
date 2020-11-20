function view() {
  return h(
    "div",
    { id: "continer" },
    h(
      "ul",
      { id: "filmList", className: "list" },
      h(
        "li",
        { className: "main" },
        "Detective Chinatown Vol 2"
      ),
      h(
        "li",
        null,
        "Ferdinand"
      ),
      h(
        "li",
        null,
        "Paddington 2"
      )
    ),
    h(
      "footer",
      null,
      "This is footer"
    )
  );
}

function render(el) {
  el.appendChild(createElement(view()));
}

// 看不明白为什么要用，什么场景下传入的children里面还有数组？
// function flatten(arr) {
//   return [].concat(...arr)
// }

function h(type, props, ...children) {
  return {
    type,
    props: props || {},
    children
    // children: flatten(children)
  };
}

function createElement(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  const { type, props, children } = node;
  const el = document.createElement(type);
  setProps(el, props);
  children.map(createElement)
  // .forEach(el.appendChild.bind(el))
  .forEach(e => el.appendChild(e));

  return el;
}

function setProp(target, name, value) {
  if (name === "className") {
    return target.setAttribute("class", value);
  }

  target.setAttribute(name, value);
}

function setProps(target, props) {
  Object.keys(props).forEach(key => {
    setProp(target, key, props[key]);
  });
}
