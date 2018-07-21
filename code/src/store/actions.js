export const ADD_HOMEPAGE_DATA = data => {
  return {
    type: 'ADD_HOMEPAGE_DATA',
    data
  }
}
export const ADD_IN_THEATERS_DATA = (data, page) => {
  return {
    type: 'ADD_IN_THEATERS_DATA',
    data,
    page
  }
}
export const ADD_COMING_SOON_DATA = (data, page) => {
  return {
    type: 'ADD_COMING_SOON_DATA',
    data,
    page
  }
}
export const ADD_TOP250_DATA = (data, page) => {
  return {
    type: 'ADD_TOP250_DATA',
    data,
    page
  }
}