import { auth } from "../firebase";
import { LuLogOut } from "react-icons/lu";

function Logout({ handleUser }) {
  const logout = () => {
    auth
      .signOut()
      .then(() => handleUser(null))
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <button onClick={logout}>
      Logout <LuLogOut size={12}/>
    </button>
  );
}

export default Logout;
