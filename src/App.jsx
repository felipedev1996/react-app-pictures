
import styles from './App.module.css';
import{ BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from './pages/LandingPage';
function App() {
  return (


   
<Router>

      <header>
        <Link to='/'>
          <h1 className={styles.title}>Movies</h1>
        </Link>
        <Link  to="/">Home</Link>
        <br />
        <Link to="/movie">Movie</Link>
      </header>
      <main>
      <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/movies/:movieId">
             <MovieDetails />
            </Route>
            <Route path="/">
             <LandingPage />
            </Route>
  
          </Switch>

          </Router>

      </main>
</Router>
  );
}

export default App;
