import React from "react";
import * as s from "./styles";
import { SearchContext } from "../../App";

const Search = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { search, setSearch } = React.useContext(SearchContext);

  function clearSearch() {
    setSearch("");
    inputRef.current?.focus();
  }

  return (
    <s.Root>
      <s.FinderSvg
        enableBackground="new 0 0 32 32"
        id="Glyph"
        version="1.1"
        viewBox="0 0 32 32"
      >
        <path
          d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
          id="XMLID_223_"
        />
      </s.FinderSvg>
      <s.Input
        ref={inputRef}
        placeholder={"Search..."}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <s.CloseSvg onClick={clearSearch} viewBox="0 0 32 32">
          <g id="cross">
            <line className="cls-1" x1="7" x2="25" y1="7" y2="25" />
            <line className="cls-1" x1="7" x2="25" y1="25" y2="7" />
          </g>
        </s.CloseSvg>
      )}
    </s.Root>
  );
};

export default Search;
