import generateActionTypes from '../Utils/generateActionTypes'
//import axios from 'axios'

export const actionTypes = generateActionTypes(
  'JOB_DETAILS', 'SCROLL_TO_TOP', 'JOB_LIST'
)

// exporting the get details 
export function postJobDetails(data) {
  return dispatch => {
    return dispatch({ type: actionTypes.JOB_DETAILS, data })
  }
}

// post job list 
export function postJobList(list) {
  return dispatch => {
    return dispatch({ type: actionTypes.JOB_LIST, list })
  }
}

// scroll to top 
export function scrollToTop(clear = false) {
  return dispatch => {
    return dispatch({ type: actionTypes.SCROLL_TO_TOP, shouldBeScrolledToTop: !clear })
  }
}
