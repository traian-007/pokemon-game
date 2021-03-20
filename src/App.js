// import { useState } from 'react';
import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom"
import cn from 'classnames'
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuHeader from "./components/MenuHeader";
import s from './style.module.css'
import Footer from "./components/Footer";
import NotFoundPage from "./routes/NotFound";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";

const App = () => {
  const match = useRouteMatch('/')
  console.log(match)
  return (
    <Switch>
      <Route path="/404" component={NotFoundPage} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(s.wrap, { [s.isHomePage]: match.isExact })}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route render={() => (
                <Redirect to="/404" />
              )} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>
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
