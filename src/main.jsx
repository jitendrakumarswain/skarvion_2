import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// Global CSS
import "./index.css";
import "./css-modular/00-global.css";

// Component CSS
import "./css-modular/01-loader.css";
import "./css-modular/02-navbar.css";
import "./css-modular/03-hero.css";
import "./css-modular/04-services.css";
import "./css-modular/05-why.css";
import "./css-modular/07-projects.css";
import "./css-modular/08-contact.css";
import "./css-modular/09-about.css";
import "./css-modular/11-testimonials.css";
import "./css-modular/12-floating-actions.css";
import "./css-modular/13-timeline.css";
import "./css-modular/14-footer.css";
import "./css-modular/15-expertise.css";
import "./css-modular/16-announcement.css";
import "./css-modular/ApplyJob.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);