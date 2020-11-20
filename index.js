function view() {
  return (
    <div id="continer">
      <ul id="filmList" className="list">
        <li className="main">Detective Chinatown Vol 2</li>
        <li>Ferdinand</li>
        <li>Paddington 2</li>
      </ul>
      <footer>This is footer</footer>
    </div>
  )
}

function render(el) {
  el.appendChild(createElement(view()))
}

// 看不明白为什么要用，什么场景下传入的children里面还有数组？
// function flatten(arr) {
//   return [].concat(...arr)
// }

function h(type, props, ...children) {
  return {
    type,
    props: props || {},
    children,
    // children: flatten(children)
  }
}

function createElement(node) {
  if (typeof node === "string") {
    return document.createTextNode(node)
  }

  const { type, props, children } = node
  const el = document.createElement(type)
  setProps(el, props)
  childrendas
    .map(createElement)
    // .forEach(el.appendChild.bind(el))
    // 这里挺看基本功力的 如果想和上面map的使用方法类似
    // 传入一个函数，这个函数被回调的时候this是指向windows的
    // 也就没法实现对el的子节点的插入了
    // 要么改变this指向👆
    // 要么使用闭包👇
    .forEach((e) => el.appendChild(e))

  return el
}

function setProp(target, name, value) {
  if (name === "className") {
    return target.setAttribute("class", value)
  }

  target.setAttribute(name, value)
}

function setProps(target, props) {
  Object.keys(props).forEach((key) => {
    setProp(target, key, props[key])
  })
}
