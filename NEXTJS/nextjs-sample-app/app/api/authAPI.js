export async function postRegistFetcher(url, member) {
  console.log("postRegistFetcher=================>", member);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      //Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
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
