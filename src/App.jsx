import { useReducer, useState } from "react";
import { cartReducer, initialState } from "./Reducers/CartReducer";
import { MovieContext, ThemeContext } from "./context";
import Page from "./page";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
export default App;
