export const enhancedFetch = async (path: string, type: "GOOGLE" | "GOV") => {
  const url =
    type == "GOOGLE"
      ? `https://api.congress.gov/v3/${path}?api_key=mMFKAXFiZbObxOrJUXqFRAoW2TN3fcHCAfjiKMs6`
      : `https://www.googleapis.com/civicinfo/v2/${path}?key=AIzaSyAJysr7AI2-ZjJl4KA9GbOki9EkWuqUEyE`;

  return fetch(url)
    .then((res) => res.json())
    .then((res) => res)
    .catch(() => console.error("CONGRESS API FETCH FAILED"));
};
