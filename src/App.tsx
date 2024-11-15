import { useState } from "react";
import { generateGradient, getMatchingPosts } from "../public/shared/BlogPost";
import "./app.css";
const App = () => {
  const [query, setQuery] = useState("");

  function handleCheck(tag: string, checked: boolean) {
    if (checked) {
      setQuery(query + '' + tag);
    } else {
      setQuery(query.replace(tag, "").trim());
    }
  }

  return (
    <div className="app">
      <form>
        <div>
          <label htmlFor="searchInput">Search:</label>
          <input
            id="searchInput"
            name="query"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleCheck("dog", e.currentTarget.checked)}
            />{" "}
            🐶 dog
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleCheck("cat", e.currentTarget.checked)}
            />{" "}
            🐱 cat
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) =>
                handleCheck("caterpillar", e.currentTarget.checked)
              }
            />{" "}
            🐛 caterpillar
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <MatchingPosts query={query} />
    </div>
  );
};

function MatchingPosts({ query }: { query: string }) {
  const matchingPosts = getMatchingPosts(query);

  return (
    <ul className="post-list">
      {matchingPosts.map((post) => (
        <li key={post.id}>
          <div
            className="post-image"
            style={{ background: generateGradient(post.id) }}
          />
          <a
            href={post.id}
            onClick={(event) => {
              event.preventDefault();
              alert(`Great! Let's go to ${post.id}!`);
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default App;
