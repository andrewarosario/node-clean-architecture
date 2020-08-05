interface SurveyAnswer {
  image?: string
  answer: string
}

export interface AddSurveyModel {
  question: string
  answers: SurveyAnswer[]
}
