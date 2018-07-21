const defaultState = {
  HomePageData: [],
  in_theaters: {
    list: [],
    page: 1
  },
  coming_soon: {
    list: [],
    page: 1
  },
  top250: {
    list: [],
    page: 1
  }
}

const reducers = (state = defaultState, actions) => {
  switch(actions.type) {
    case 'ADD_HOMEPAGE_DATA':
      return Object.assign({}, state, {
        HomePageData: [...state.HomePageData, actions.data]
      })
    case 'ADD_IN_THEATERS_DATA':
      return Object.assign({}, state, {
        in_theaters: {
          list: actions.data,
          page: actions.page
        }
      })
    case 'ADD_COMING_SOON_DATA':
      return Object.assign({}, state, {
        coming_soon: {
          list: actions.data,
          page: actions.page
        }
      })
    case 'ADD_TOP250_DATA':
      return Object.assign({}, state, {
        top250: {
          list: actions.data,
          page: actions.page
        }
      })
    default:
      return state
  }
}

export default reducers