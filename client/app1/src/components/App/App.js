import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import About from '../About'
import Employee from '../Employee'
import FinishRace from '../FinishRace'
import Home from '../Home'
import LoginProfile from '../LoginProfile'
import StartHeadrace from '../StartHeadrace'
import Nav from '../Nav'

function App() {
  return (
    <Router>
      <>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/finishrace' component={FinishRace} />
          <Route path='/loginprofile' component={LoginProfile} />
          <Route path='/startheadrace' component={StartHeadrace} />
          <Route path='/employee/:id' component={Employee} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
