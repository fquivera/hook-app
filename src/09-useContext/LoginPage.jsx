import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>{JSON.stringify(user)}</pre>

      <button
        className="btn btn-primary"
        onClick={() =>
          user.setUser({
            id: 123,
            name: "Francisco",
            email: "fquivera@google.com",
          })
        }
      >
        Login
      </button>
    </>
  );
};
