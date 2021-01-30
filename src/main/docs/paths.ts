import {
  loginPath,
  surveyPath,
  signUpPath,
  surveyResultPath,
  documentTypePath
} from './paths/'

export default {
  '/login': loginPath,
  '/signup': signUpPath,
  '/surveys': surveyPath,
  '/surveys/{surveyId}/results': surveyResultPath,

  '/document-type': documentTypePath

}
