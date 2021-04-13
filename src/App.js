import { useLocation, Route, Switch, Redirect } from "react-router-dom"
import cn from 'classnames'
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuHeader from "./components/MenuHeader";
import s from './style.module.css'
import Footer from "./components/Footer";
import NotFoundPage from "./routes/NotFound";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import { FireBaseContext } from "./context/firebaseContext";
// import Firebase from "./service/firebase";
import { NotificationContainer, NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'

import FirebaseClass from "./service/firebase";
import PrivateRoute from "./components/Private.Route";


const App = () => {
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

  return (
    <FireBaseContext.Provider value={FirebaseClass}>
      <Switch>
        <Route path="/404" component={NotFoundPage} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding} />
            <div className={cn(s.wrap, { [s.isHomePage]: isPadding })}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/home" component={HomePage} />
                <PrivateRoute path="/game" component={GamePage} />
                <PrivateRoute path="/about" component={AboutPage} />
                <PrivateRoute path="/contact" component={ContactPage} />
                <Route render={() => (
                  <Redirect to="/404" />
                )} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
      <NotificationContainer />
    </FireBaseContext.Provider>

  )
}

// const App = () => {
//   const [page, setPage] = useState('app');
//   const handleChangePage = (page) => {
//     setPage(page)
//   };

//   switch (page) {
//     case "app":
//       return <HomePage onChangePage={handleChangePage} />
//     case "game":
//       return <GamePage onChangePage={handleChangePage} />
//     default:
//       return <HomePage onChangePage={handleChangePage} />
//   }
// };

export default App;

