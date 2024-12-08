import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import ExcelComponent from "./components/admin/ExcelComponent";
import Notifications from "./components/pages/notifications/notification"
import ExcelPage from "./components/pages/ExcelApp/ExcelPage"


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App /> 
    {/* <ExcelPage/> */}
    {/* <Notifications/> */}
    {/* <ExcelComponent/> */}
  </React.StrictMode>
);
