import * as React from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

interface IState {
  count: number
  label: string
}

class App extends React.Component {
  public state: IState = {
    count: 0,
    label: '123'
  }

  public render() {
    return (
      <div>
        <h1>hello world</h1>
        <h2>Count: {this.state.count}</h2>
        {this.state.count === 9 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
