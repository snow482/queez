import { useEffect, useState } from "react";
import Theme from "./Theme";

function LoadTheme() {
  const [theme, setTheme] = useState([]);

  useEffect(() => {
    fetchThemes();
  }, []);

  async function fetchThemes() {
    const response = await fetch("/api/themes");
    const data = await response.json();

    setTheme(data);
  }
  return (
    <>
      <h1>Выбор темы:</h1>
      {theme.map((el) => (
        <Theme key={el.id} cardProps={el} setTheme={setTheme} />
      ))}
    </>
  );
}

export default LoadTheme;

