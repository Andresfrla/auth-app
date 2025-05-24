import axios from "axios";

const API_KEY = "AIzaSyAl8zNKlA3yZSCNqc_bwW4x385WCPc7Mgc";

export async function authenticate({ mode, email, password }) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

export function createUSer(email, password) {
  return authenticate({mode: "signUp", email, password});
}

export function login(email, password) {
  return authenticate({mode: "signInWithPassword", email, password});
}
