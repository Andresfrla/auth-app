import axios from "axios";

const API_KEY = "AIzaSyAl8zNKlA3yZSCNqc_bwW4x385WCPc7Mgc";

export async function createUSer(email, password) {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
    } catch (error) {
      console.error('Error creating the user:', error.response?.data || error.message);
      throw error;
    }
  }
  