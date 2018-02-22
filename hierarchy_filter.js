const data = [
  {"id": 1, "name": "Asia", "parent_id": null},
  {"id": 2, "name": "Singapore", "parent_id": 1},
  {"id": 3, "name": "Malaysia", "parent_id": 1},
  {"id": 4, "name": "Kuala Lumpur", "parent_id": 3},
];

function filterHierarchy(data, callback) {
  let root, obj = {}, answer = [];
  for(i = 0; i < data.length; i++) {
    if(callback(data[i])){
      root = data[i].id;
      answer.push(data[i]);
    }
    obj[data[i].id] = data[i];
  }
  getResults(obj[root].parent_id, obj, answer);
  return answer;
}

function getResults(id, obj, answer) {
  if(typeof obj[id] === "object"){
    answer.unshift(obj[id]);
    getResults(obj[id].parent_id, obj, answer);
  }
}

results = filterHierarchy(data, location => location.name === "Kuala Lumpur")
console.log(results)
