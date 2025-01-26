import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/home"
const RouterApp: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp