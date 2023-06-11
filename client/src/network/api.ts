import { formData } from "../types/types";

const routeURL = "http://localhost:5000";

const fetchData = async (input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(`${routeURL}${input}`, init);
  console.log("respones =   ", res);
  if (res.ok) return res;
  else {
    const errorBody = await res.json();
    const errMessage = errorBody.error;
    throw Error(errMessage);
  }
};
export const fetchRegister = async (data: formData, setErr: any) => {
  try {
    const response = await fetchData("/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    if (error instanceof Error) setErr(error.message);
  }
};
export const fetchLogin = async (data: formData, setErr: any) => {
  try {
    const response = await fetchData("/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    if (error instanceof Error) setErr(error.message);
  }
};
const createAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? token : "No token";
};
export const fetchNewGame = async (length: number) => {
  const response = await fetchData(`/game/create/${length}`, {
    method: "GET",
    headers: {
      Authorization: createAuthHeader(),
    },
  });
  const data = await response.json();
  return data;
};
export const fetchLastGame = async (setErr: any) => {
  try {
    const response = await fetchData("/game/activeGame", {
      method: "GET",
      headers: {
        Authorization: createAuthHeader(),
      },
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    setErr(error.message);
  }
};

export const fetchGuess = async (letter: string) => {
  const response = await fetchData("/game/geuss", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: createAuthHeader(),
    },
    body: JSON.stringify({
      letter: letter,
      id: localStorage.getItem("activeGame"),
    }),
  });

  return response.json();
};
