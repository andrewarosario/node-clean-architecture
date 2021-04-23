import { adaptResolver } from '@/main/adapters'
import { makeLoadSurveysController } from '@/main/factories'

export default {
  Query: {
    login: async () => adaptResolver(makeLoadSurveysController())
  }
}
