import { Routes, Route } from "react-router-dom";
import AuthenticationComponent from "./routes/auth/auth.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import ShopComponent from "./routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<Home />} />
        <Route path="shop" element={<ShopComponent />} />
        <Route path="auth" element={<AuthenticationComponent />} />
      </Route>
    </Routes>
  );
};

export default App;
