import {
  Dashboard,
  Servers,
  Users
} from "views";

export default [{
  text: "Dashboard",
  component: Dashboard,
  exact: true,
  path: "/",
  icon: "dashboard"
}, {
  text: "Users",
  component: Users,
  exact: true,
  path: "/users",
  icon: "user"
}, {
  text: "Servers",
  component: Servers,
  exact: true,
  path: "/servers",
  icon: "database"
}];