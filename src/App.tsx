import Header from "./components/Header";
import Card1Home from "./components/Card1Home";
import Card2About from "./components/Card2About";
import Card3How from "./components/Card3How";
import Card4WhoItsFor from "./components/Card4WhoItsFor";
import Card5Testimonials from "./components/Card5Testimonials";
import Card6Hosts from "./components/Card6Hosts";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="card-space-between">
        <Card1Home />
        <Card2About />
        <Card3How />
        <Card4WhoItsFor />
        <Card5Testimonials />
        <Card6Hosts />
      </div>
    </>
  );
}

export default App;
