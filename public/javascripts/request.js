var person = [];
var dom = document.getElementById("root");

const request = function Request() {
  fetch("http://localhost:7007/json/fazenda.json")
    .then(req => req.json())
    .then(json => {
      person = json.data;
    });
  setTimeout(function() {
    return person.map(function(item, index) {
      var list = document.createElement("h1");
      list.setAttribute("id", index);
      dom.append(list);
      list.innerHTML = item.name;
    });
  }, 100);
};

request();
