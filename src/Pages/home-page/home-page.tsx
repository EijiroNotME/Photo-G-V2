import useLogout from "../../hooks/useLogout";

function Home() {
  const { logout, error, isPending } = useLogout();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={logout} className="btn-logout" disabled={isPending}>
        {isPending ? "Logging out..." : "Logout"}
        {error && <p className="error">{error}</p>}
      </button>
    </div>
  );
}
export default Home;
