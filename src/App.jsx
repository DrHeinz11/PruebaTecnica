import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./constant/data.names";

function App() {
  const [keyword, setKeyword] = useState("");
  const [filtered, setFiltered] = useState(data);

  const handleChange = (ev) => setKeyword(ev.target.value);

  useEffect(() => {
    const filtered = data.filter((element) =>
      element.toLowerCase().includes(keyword.toLowerCase())
    );
    setFiltered(filtered);
  }, [keyword]);

  return (
    <div className="App">
      <div className="form__container">
        <form className="form" action="" onSubmit={(ev) => ev.preventDefault()}>
          <input
            type="text"
            name="search"
            value={keyword}
            id="searchbar"
            onChange={(ev) => handleChange(ev)}
          />
          {keyword ? (
            <button onClick={() => setKeyword("")}>❌</button>
          ) : (
            <button type="submit">🔍</button>
          )}
        </form>
        {filtered && (
          <ul className="lista__container">
            {filtered.length === 0 && <li>No results</li>}
            {filtered.map((element, index) => (
              <li className="lista" key={index}>
                {element}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
