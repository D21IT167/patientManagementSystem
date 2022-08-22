import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
        <Router>
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path = "/" exact component = {ListPatientComponent}></Route>
              <Route path = "/patients" component = {ListPatientComponent}></Route>
              <Route path = "/add-patient/:id" component = {CreatePatientComponent}></Route>
              <Route path = "/view-patient/:id" component = {ViewPatientComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />
        </Router>
      </div>

  );
}

export default App;
