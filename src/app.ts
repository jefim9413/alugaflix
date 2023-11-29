import { env } from './env'
import { app } from './shared/infra/server'

app.listen(env.PORT, () => {
  console.log('🚀 Running Server 🚀' + env.PORT)
})
