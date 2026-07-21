import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";

import App from "./App";
import "./index.css";   // or "./styles/globals.css" if that's where your styles are

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <Toaster position="top-right"/>
                <App />
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);