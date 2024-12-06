import { useEffect, useState } from "react";
import {
  type BlogPost,
  generateGradient,
  getMatchingPosts,
} from "../../public/shared/BlogPost";
import { setGlobalSearchParams } from "../../public/shared/utils";
import "./style.css";

const getQueryParam = (params: URLSearchParams) => params.get("query") ?? "";

function SearchForm() {
  const [searchParams, setSearchParamsState] = useState(
    () => new URLSearchParams(window.location.search)
  );

  useEffect(() => {
    function updateSearchParams() {
      setSearchParamsState((prevParams) => {
        const newParams = new URLSearchParams(window.location.search);
        if (prevParams.toString() === newParams.toString()) {
          return prevParams;
        }
        return newParams;
      });
    }
    window.addEventListener("popstate", updateSearchParams);
    return () => window.removeEventListener("popstate", updateSearchParams);
  }, []);

  function setSearchParams(...args: Parameters<typeof setGlobalSearchParams>) {
    const searchParams = setGlobalSearchParams(...args);
    setSearchParamsState(prevParams => {
		if(prevParams.toString() === searchParams.toString()) {
			return prevParams
		}
		return searchParams
	});
    return searchParams;
  }

  const query = getQueryParam(searchParams);
  return (
    <div className="app">
      <Form query={query} setSearchParams={setSearchParams} />
      <MatchingPosts query={query} />
    </div>
  );
}

function Form({
  query,
  setSearchParams,
}: {
  query: string;
  setSearchParams: typeof setGlobalSearchParams;
}) {
  const words = query.split(" ").map((w) => w.trim());

  const dogChecked = words.includes("dog");
  const catChecked = words.includes("cat");
  const caterpillarChecked = words.includes("caterpillar");

  function handleCheck(tag: string, checked: boolean) {
    const newWords = checked ? [...words, tag] : words.filter((w) => w !== tag);
    setSearchParams(
      { query: newWords.filter(Boolean).join(" ").trim() },
      { replace: true }
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchParams({ query });
      }}
    >
      <div>
        <label htmlFor="searchInput">Search:</label>
        <input
          id="searchInput"
          name="query"
          type="search"
          value={query}
          onChange={(e) =>
            setSearchParams({ query: e.currentTarget.value }, { replace: true })
          }
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={dogChecked}
            onChange={(e) => handleCheck("dog", e.currentTarget.checked)}
          />{" "}
          🐶 dog
        </label>
        <label>
          <input
            type="checkbox"
            checked={catChecked}
            onChange={(e) => handleCheck("cat", e.currentTarget.checked)}
          />{" "}
          🐱 cat
        </label>
        <label>
          <input
            type="checkbox"
            checked={caterpillarChecked}
            onChange={(e) =>
              handleCheck("caterpillar", e.currentTarget.checked)
            }
          />{" "}
          🐛 caterpillar
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function MatchingPosts({ query }: { query: string }) {
  const matchingPosts = getMatchingPosts(query);

  return (
    <ul className="post-list">
      {matchingPosts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </ul>
  );
}

function Card({ post }: { post: BlogPost }) {
  const [isFavorited, setIsFavorited] = useState(false);
  return (
    <li>
      {isFavorited ? (
        <button
          aria-label="Remove favorite"
          onClick={() => setIsFavorited(false)}
        >
          ❤️
        </button>
      ) : (
        <button aria-label="Add favorite" onClick={() => setIsFavorited(true)}>
          🤍
        </button>
      )}
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
  );
}

export default SearchForm;
