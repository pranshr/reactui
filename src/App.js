import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer, Home, Companies, Services, Contact, About, Disclaimers, Faq, Terms, Scompanies, Institutions, Investors, Shareholders, Cdetail, Why } from "./components";
import "./style.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Companies" exact component={() => <Companies />} />
          <Route path="/Services" exact component={() => <Services />} />
          <Route path="/Contact" exact component={() => <Contact />} />
          <Route path="/About" exact component={() => <About />} />
          <Route path="/Disclaimers" exact component={() => <Disclaimers />} />
          <Route path="/Faq" exact component={() => <Faq />} />
          <Route path="/Terms" exact component={() => <Terms />} />
          <Route path="/Scompanies" exact component={() => <Scompanies />} />
          <Route path="/Institutions" exact component={() => <Institutions />} />
          <Route path="/Investors" exact component={() => <Investors />} />
          <Route path="/Shareholders" exact component={() => <Shareholders />} />
          <Route path="/Cdetail/:id" exact component={() => <Cdetail />} />
          <Route path="/Why" exact component={() => <Why />} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
