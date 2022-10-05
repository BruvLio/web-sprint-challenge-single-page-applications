import React from "react";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch, Route, Link } from 'react-router-dom';
import Form from './Component/Form';
import HomePage from './Component/HomePage';



// function Home(props) {
//   return <h1>HOme Component</h1>;
// }


const App = () => {
  return (
    <div>
      <h1>Bloomtech Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/pizza' component={Form} />
      </Switch>
    </div>
  );
};
export default App;
