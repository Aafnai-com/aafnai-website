import { Outlet } from "react-router-dom";

export default function ResourcesLayout() {
    return (
        <div>
            <h1>Resources Page Layout</h1>
            <Outlet /> {/* possibly render nested routes here */}
        </div>
    );
}