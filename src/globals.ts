export const enhancedFetch = async (
  type: "GEO" | "CONGRESS",
  path?: string,
) => {
  const url =
    type == "CONGRESS"
      ? `https://api.congress.gov/v3/${path}?api_key=${process.env.REACT_APP_CONGRESS_API_KEY}`
      : `https://api.geocod.io/v1.7/${path}&api_key=${process.env.REACT_APP_GEO_API_KEY_TWO}`;

  return fetch(url)
    .then((res) => res.json())
    .then((res) => res)
    .catch(() => console.error(`${type} API FETCH FAILED`));
};

export const _ = undefined;
