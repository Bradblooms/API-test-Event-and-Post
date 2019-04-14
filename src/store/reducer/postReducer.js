import { FETCH_POSTS, NEW_POST } from "../actions/type";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState) {
  return state;
}
