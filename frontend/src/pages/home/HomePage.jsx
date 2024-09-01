import { useAuthStore } from "../../store/authUser";
import AuthScreen from "./AuthScreenComponent"; // This should match the actual file name.

import HomeScreen from "./HomeScreen";

const HomePage = () => {
  const { user } = useAuthStore();

  return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
};
export default HomePage;
