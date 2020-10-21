interface SurveyAnswer {
  image?: string
  answer: string
}

export interface LoadSurveysControllerModel {
  question: string
  answers: SurveyAnswer[]
  date: Date
}
