import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Account } from "./pages/Account";
import { MainPage } from "./pages/Main/MainPage";
import { Navbar } from "./components/Navbar";
import { Post } from "./pages/Post/Post";

function App() {
  // console.log(user);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Account />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
