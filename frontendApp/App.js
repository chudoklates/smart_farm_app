import React from 'react';
import { Router, Scene } from 'react-native-router-flux'
import { Home, Graph, ErrorBoundary } from './components'

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} initial />
          <Scene key="graph" component={Graph} />
        </Scene>
      </Router>
    </ErrorBoundary>
  );
}

