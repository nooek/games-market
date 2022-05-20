import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {
  Home,
  Register,
  Login,
  PublishGame,
  Game,
  GamesByCategory,
  Profile,
  ChangeInfo,
  MyGames
} from "./pages/index"
import {
  GetUserInfo
} from "./HOCs"
import UserDataProvider from "./store/userContext"

const App = () => {
  return (
    <UserDataProvider>
      <GetUserInfo>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/publish/game" exact component={PublishGame} />
            <Route path="/game/:id" exacts component={Game} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/games/category/:categories/:minprice/:maxprice"  exact component={GamesByCategory} />
            <Route path="/profile/changeinfo/:change" exact component={ChangeInfo} />
            <Route path="/profile/mygames" exact component={MyGames} />
            <Route path="*" component={() => <h2 style={{color: "white"}}>Error 404 - Page Not Found</h2>} />
          </Switch>
        </Router>
      </GetUserInfo>
    </UserDataProvider>
  );
}

export default App;
