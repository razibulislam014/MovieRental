import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { cartReducer, initialState } from "./reducers/CartReducer";

function App() {
  const [darkMood, setDarkMood] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <ThemeContext.Provider value={{ darkMood, setDarkMood }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Page />
        <ToastContainer />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
