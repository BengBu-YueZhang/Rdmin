import dva from 'dva'
import '@/assets/reset.scss'
import '@/assets/common.css'

/******   model     ******/
import LoginModel from '@/models/Login'
import SpinModel from '@/models/Spin'
import Dashboard from '@/models/Dashboard'
import Auth from '@/models/Auth'
import User from '@/models/User'

// 1. Initialize
const app = dva()

// 2. Plugins
// app.use({});

// 3. Model
app.model(LoginModel)
app.model(SpinModel)
app.model(Dashboard)
app.model(Auth)
app.model(User)

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
