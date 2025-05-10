import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUSer } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUSer(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not create a user. Please check your input and try again later! "
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
