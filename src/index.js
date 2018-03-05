import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { AppContainer } from 'react-hot-loader'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  )
}

render(App)

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}
/*eslint-enable */
