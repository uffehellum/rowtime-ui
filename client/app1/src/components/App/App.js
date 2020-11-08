import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import About from '../About'
import FinishRace from '../FinishRace'
import Home from '../Home'
import StartHeadrace from '../StartHeadrace'
import Nav from '../Nav'

function App() {
  return (
    <Router>
      <div className="App">
        <p>Row time - Time tracking for regattas</p>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/finishrace' component={FinishRace} />
          <Route path='/startheadrace' component={StartHeadrace} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
