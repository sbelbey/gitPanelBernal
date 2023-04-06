import { useState, useEffect } from "react";
import { useLocalStorage } from "./Hooks/useLocalStorage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Profile from "./pages/profile/Profile.jsx";
import { productInputs, userInputs, vehicleInputs } from "./formSource.js";

function App() {
    const [user, setUser] = useLocalStorage("user", "");
    const [token, setToken] = useState(null);

    const handleUser = (user) => {
        setUser(user);
    };

    useEffect(() => {
        if (user) {
            setToken(user.token);
        } else {
            setToken(null);
        }
    }, [user]);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route
                            index
                            element={user ? <Home /> : <Navigate to="/login" />}
                        />
                        <Route
                            path="login"
                            element={
                                user ? (
                                    <Navigate to="/" />
                                ) : (
                                    <Login handleUser={handleUser} />
                                )
                            }
                        />
                        <Route path="usuarios">
                            <Route
                                index
                                element={
                                    user ? (
                                        <List userToken={token} />
                                    ) : (
                                        <Navigate to="/login" />
                                    )
                                }
                            />
                            <Route
                                path=":usuarioId"
                                element={
                                    user ? (
                                        <Single userToken={token} />
                                    ) : (
                                        <Navigate to="/login" />
                                    )
                                }
                            />
                            <Route
                                path="nuevo"
                                element={
                                    user ? (
                                        <New
                                            userToken={token}
                                            inputs={userInputs}
                                            title="Agregar un nuevo usuario"
                                        />
                                    ) : (
                                        <Navigate to="/login" />
                                    )
                                }
                            />
                        </Route>
                        <Route path="productos">
                            <Route
                                index
                                element={
                                    user ? (
                                        <List userToken={token} />
                                    ) : (
                                        <Navigate to="/login" />
                                    )
                                }
                            />
                            <Route
                                path=":productoId"
                                element={
                                    user ? (
                                        <Single userToken={token} />
                                    ) : (
                                        <Navigate to="/login" />
                                    )
                                }
                            />
                            <Route
                                path="nuevo"
                                element={
                                    user ? (
                                        <New
                                            userToken={token}
                                            inputs={productInputs}
                                            title="Agregar un producto"
                                        />
                                    ) : (
                                        <Navigate to="/login" />
                                    )
                                }
                            />
                        </Route>
                        <Route path="vehiculos">
                            <Route
                                index
                                element={
                                    user ? (
                                        <List userToken={token} />
                                    ) : (
                                        <Navigate to="/login" />
                                    )
                                }
                            />
                            <Route
                                path=":vehiculoId"
                                element={
                                    user ? (
                                        <Single userToken={token} />
                                    ) : (
                                        <Navigate to="/login" />
                                    )
                                }
                            />
                            <Route
                                path="nuevo"
                                element={
                                    user ? (
                                        <New
                                            inputs={vehicleInputs}
                                            userToken={token}
                                            title="Agregar un vehículo"
                                        />
                                    ) : (
                                        <Navigate to="/login" />
                                    )
                                }
                            />
                        </Route>
                        <Route
                            path="/profile"
                            element={
                                user ? <Profile /> : <Navigate to="/login" />
                            }
                        ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
