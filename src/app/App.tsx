import Router from "./router";
import "./App.css";
import "../styles/sharedAnimations.css";
import "../styles/typography.css";
import { useTheme } from "../context/ThemeContext";
import { themeColourSchemes } from "../styles/themeColourScheme";

function App() {
  const { themeName } = useTheme();

  const htmlColour = themeColourSchemes[themeName].BackgroundSecondColour;

  return (
    <div className="App" style={{ backgroundColor: htmlColour }}>
      <Router />
    </div>
  );
}

export default App;
