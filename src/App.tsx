import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import UserProfile from "./routes/user-profile/user-profile.component";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<UserProfile />} />
        {/* <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
