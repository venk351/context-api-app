import logo from "./logo.svg";
import "./App.css";
import Blog from "./component/Blog";
import UserInfoContext from "./context/UserInfoContext";
import ThemeProvider from "./context/ThemeProvider";
import ThemeComponent from "./component/ThemeComponent";

function App() {
  const user = { user: "Admin", isAdmin: true };
  return (
    <div>
      <UserInfoContext.Provider value={user}>
        <Blog></Blog>
      </UserInfoContext.Provider>
      <ThemeProvider>
        <ThemeComponent></ThemeComponent>
      </ThemeProvider>
    </div>
  );
}

export default App;
