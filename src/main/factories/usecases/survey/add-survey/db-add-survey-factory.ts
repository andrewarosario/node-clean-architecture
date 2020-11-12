import { AddSurvey } from '@/domain/usecase/survey/add-survey'
import { DbAddSurvey } from '@/data/usecases/survey/add-survey/db-add-survey'
import { SurveyMongoRepository } from '@/infra/db/mongodb/survey/survey-mongo-repository'

export const makeDbAddSurvey = (): AddSurvey => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbAddSurvey(surveyMongoRepository)
}
