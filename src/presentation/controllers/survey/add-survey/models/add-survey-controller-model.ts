interface SurveyAnswer {
  image?: string
  answer: string
}

export interface AddSurveyControllerModel {
  question: string
  answers: SurveyAnswer[]
  date: Date
}
