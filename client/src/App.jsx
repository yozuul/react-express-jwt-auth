import React  from 'react'
import { BrowserRouter } from 'react-router-dom';
import { ProvideAuth } from './hooks/use-auth'
import Router from './routes'

const App = () => {
    return(
      <ProvideAuth>
         <BrowserRouter>
            <Router />
         </BrowserRouter>
      </ProvideAuth>
    )
}

export default App