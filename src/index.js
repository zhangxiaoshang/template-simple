const logs = ["v1.0.0", "支持热更新"];

function component() {
  var element = document.createElement("div");

  element.innerHTML = logs.join("<br />");

  return element;
}

document.body.appendChild(component());
