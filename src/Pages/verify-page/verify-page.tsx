import useLogout from "../../hooks/useLogout";
import { useAuth } from "../../context/authContext";
import { AuthContextType } from "../../types/users";
import useVerify from "../../hooks/useVerification";

function Home() {
  const { logout, error, isPending } = useLogout();
  const { currentUser } = useAuth() as AuthContextType;

  const { verify, isPendingVerify, errorVerify, timer } = useVerify();

  const handleSendVerification = async () => {
    await verify();
  };

  return (
    <div>
      <h1>Please Verify your Email</h1>
      {currentUser && <h2>Check your email: {currentUser.email}</h2>}
      <div>
        <button
          className="my-5 w-100 h-10  bg-secondary text-white"
          onClick={handleSendVerification}
          disabled={isPendingVerify || timer > 0}
        >
          {isPendingVerify
            ? "Sending..."
            : timer > 0
            ? `Wait ${timer}s`
            : "Send Verification Email"}
        </button>
        {errorVerify && <p className="error text-red-500">{errorVerify}</p>}
      </div>

      <div>
        <button
          onClick={logout}
          className="my-5 w-100 h-10  bg-secondary text-white"
          disabled={isPending}
        >
          {isPending ? "Logging out..." : "Logout"}
        </button>
        {error && <p className="error text-red-500">{error}</p>}
      </div>

      <div>
      After verification, please reload this page to proceed to the home page. You only need to do this once.
      </div>
    </div>
  );
}
export default Home;
