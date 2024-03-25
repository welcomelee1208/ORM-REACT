export async function getArticleFetcher(url) {
  console.log("getRegistFetcher=================>");
  const response = await fetch(url, {
    method: "GET",
    headers: {
      //Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export async function postLoginFetcher(url, member) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  });
  return response.json();
}
