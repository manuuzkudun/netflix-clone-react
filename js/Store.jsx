import { createStore, compose } from 'redux'
import { connect } from 'react-redux'

const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {
  searchTerm: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return searchReducer(state, action)
    default:
      return state
  }
}

const searchReducer = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}

const store = createStore(rootReducer, initialState, compose(
  typeof window === 'object' &&
  typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => {
  return { searchTerm: state.searchTerm }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (searchTerm) => {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm})
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
