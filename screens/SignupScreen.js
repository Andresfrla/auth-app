import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUSer } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUSer(email, password);
    } catch (error) {
      setIsAuthenticating(false);
      alert('An error happen creating the user');
    }
    setIsAuthenticating(false);
  }
  

  if(isAuthenticating){
    return <LoadingOverlay message="Creating user..."/>
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
