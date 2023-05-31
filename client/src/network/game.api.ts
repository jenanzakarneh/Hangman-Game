const serverURL = "http://localhost:5000";

const fetchData = async (input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(`${serverURL}${input}`, init);
  console.log("respones =   ", res);
  if (res.ok) return res;
  else {
    const errorBody = await res.json();
    const errMessage = errorBody.error;
    throw Error(errMessage);
  }
};

export const fetchNewGame = async (length: number) => {
  const response = await fetchData(`/game/${length}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

export const fetchGuess = async (letter: string) => {
  const response = await fetchData("/game/geuss", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      letter: letter,
      id: localStorage.getItem("activeGame"),
    }),
  });

  return response.json();
};
