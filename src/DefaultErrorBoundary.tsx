import React, { Component } from 'react'

interface State {
  isError: boolean
}

export default class DefaultErrorBoundary extends Component<{}, State> {
  public state = {
    isError: false
  }

  public render(): JSX.Element {
    // const { isError } = this.state
    // const { children } = this.props

    return <div>hello</div>
  }
}
