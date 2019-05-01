// list of all actions

export function moviesList() {
  return {
    type: "MOVIES_LIST",
    payload: [
      { id: "1", name: "Star Wars" },
      { id: "2", name: "True Lies" },
      { id: "3", name: "Godfather" }
    ]
  };
}

export function directorsList() {
  return {
    type: "DIR_LIST",
    payload: [{ id: "1", name: "Scorcese" }, { id: "2", name: "Kubrick" }]
  };
}
