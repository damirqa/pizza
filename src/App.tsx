import React, { SetStateAction, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

interface ISearchContext {
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
}

export const SearchContext = React.createContext<ISearchContext>(
  {} as ISearchContext
);

function App() {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Home />
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
