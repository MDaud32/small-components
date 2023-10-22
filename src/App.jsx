import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import Link from "./component/Link";
import Route from "./component/Route";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/buttonpage">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
