import React from "react";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Header from './components/header'
import Showcase from './components/Showcase'
import Destinations from './components/destinations'
import Login from './components/login'
import SignUP from './components/Signup'
import Footer from './components/footer'
import Error from './components/error.js'


function App() {
  return (
    <Router>
     <Header />

     <Switch>
           <Route exact path="/">

       <Showcase/>
      
       {<Destinations/> }
     </Route>

     <Route path ="/login">
       <Login />
     <Route path ="/signup">
       <SignUP />
     </Route>
     </Route>

     <Route path="*">
       <Error />
     </Route>

     </Switch>
      
     <Footer />
    </Router>
     
    
  );
}

export default App;
