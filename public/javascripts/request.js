var request = function Request(url) {
  fetch(`${url}`)
    .then(req => req.json())
    .then(json => console.log(json));
};
