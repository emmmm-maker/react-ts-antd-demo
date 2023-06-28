import './App.css'
import {useRoutes} from 'react-router-dom'
import RouterList from '@/router/index'

function App() {
    return useRoutes(RouterList)
}

export default App
