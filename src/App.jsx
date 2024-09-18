// App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Layout from "./components/Layout";

const App = () => (
  <Router>
    <ScrollToTop />
    <Layout>
      <AnimatedRoutes />
    </Layout>
  </Router>
);

export default App;
