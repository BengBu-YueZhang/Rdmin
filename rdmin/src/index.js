import dva from 'dva'
import '@/assets/reset.scss'
import '@/assets/common.css'

// 1. Initialize
const app = dva()

// 2. Plugins
// app.use({});

// 3. Model
app.model(
  require('@/models/Spin').default,
  require('@/models/Login').default
)

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
