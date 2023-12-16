import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'

import App from './App'
import './index.css'
import { Provider } from './context/context'

ReactDOM.render(
    <SpeechProvider appId='fd0aff17-5204-47fe-ba3e-17a571e92244' language='en-US'>
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>
    
    ,document.getElementById('root')
)