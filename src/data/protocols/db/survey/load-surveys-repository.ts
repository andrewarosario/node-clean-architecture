import { SurveyModel } from '@/domain/models/survey'
export interface LoadSurveysRepository {
  loadAll (accountId: string): Promise<SurveyModel[]>
}
