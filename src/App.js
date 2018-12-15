import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

class App extends Component {
  state = {
    count: 0
  }

  render() {
    return (
      <div>
        <h1>hello world</h1>
        <h2>Count: {this.state.count}</h2>
        {this.state.count === 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
