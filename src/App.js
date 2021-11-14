import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddNewFood from "./components/AddNewFood/AddNewFood";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import ManageBookings from "./components/ManageBookings/ManageBookings";
import AuthProvider from "./contexts/AuthProvider.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Courses from "./pages/Courses.js";
import Dashboard from "./pages/Dashboard.js";
import Details from "./pages/Details.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import PageNotFound from "./pages/PageNotFound.js";
import Reset from "./pages/Reset.js";
import Signup from "./pages/Signup.js";
import PrivateRoute from "./route/PrivateRoute.js";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header> </Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>



            <Route exact path="/services">
              <Courses></Courses>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/addNewFood">
              <AddNewFood></AddNewFood>
            </PrivateRoute>

            <PrivateRoute path="/manageBookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/signup">
              <Signup></Signup>
            </Route>

            <Route path="/reset">
              <Reset></Reset>
            </Route>

            <Route path="/services/:id">
              <Details></Details>
            </Route>

            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
