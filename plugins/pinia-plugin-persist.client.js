import piniaPersist from 'pinia-plugin-persist'

export default ({ app }) => {
  app.pinia?.use(piniaPersist)
}