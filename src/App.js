import React, { Suspense, lazy, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./Loader/Loader";
import Sidebar from "./comps/Sidebar";
import Navbar from "./comps/Navbar";
import HeroSection from "./comps/HeroSection";
const Header = lazy(() => import("./Services/Header"));
const Domains = lazy(() => import("./DomainsPage/DomainsPage"));
const ProjectsDisplay = lazy(() => import("./ProjectsPage/ProjectsDisplay"));
const EventsDisplay = lazy(() => import("./EventsPage/EventsDisplay"));
const TeamsPage = lazy(() => import("./TeamsPage/TeamsPage"));
const Footer = lazy(() => import("./comps/Footer"));
const Home = lazy(() => import("./pages"));
// import Eventpage from './comps/EventPage';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Header} />
          <Route path="/projects" component={ProjectsDisplay} />
          <Route path="/domains" component={Domains} />
          <Route path="/events" component={EventsDisplay} />
          <Route path="/team" component={TeamsPage} />
          {/* <Route
            path="/davincicode"
            component={() =>
              (window.location = "https://forms.gle/ETh376hWsrGYLpq66")
            }
          /> */}
          {/* <Route path="/event" component={Eventpage} /> */}
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
