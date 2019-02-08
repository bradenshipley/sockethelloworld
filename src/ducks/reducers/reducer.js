const initialState = {
  bloop: ""
}

//Constants
const BLAH = "BLAH"
//action creators
const updateBlah = str => {
  return {
    type: BLAH,
    payload: str
  }
}
//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case BLAH:
      return {
        bloop: action.payload
      }
  }
}
