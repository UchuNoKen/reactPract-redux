// Action returns an object
const action = {
  type: "MOVIES_LIST",
  payload: [{ id: "1", name: "Star Wars" }, { id: "2", name: "True Lies" }]
};

// Reducer finds a match
export default function(state = {}, action) {
  switch (action.type) {
    case "MOVIES_LIST":
      return { ...state, movies: action.payload };
    default:
      return state;
  }
}
