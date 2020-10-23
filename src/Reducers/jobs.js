import { actionTypes } from '../Actions/jobs'
const {
  JOB_DETAILS, SCROLL_TO_TOP, JOB_LIST
} = actionTypes;

const initialState = {
  jobDetails: {},
  jobList: []
}

// exporting the reducer function 
export default function job(state = initialState, action) {
  switch (action.type) {
    case SCROLL_TO_TOP:
      return { ...state, scrollToTop: action.shouldBeScrolledToTop }
    case JOB_DETAILS:
      return { ...state, jobDetails: action.data }
    case JOB_LIST:
      return { ...state, jobList: action.data }
    default:
      return state
  }
}