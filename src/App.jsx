import { useState } from "react";
import LayoutContent from "./components/LayoutContent";
import SideMenu from "./components/SideMenu";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <main className="relative flex">
      <LayoutContent setActiveSection={setActiveSection} />
      <SideMenu activeSection={activeSection} />
    </main>
  );
}

export default App;
