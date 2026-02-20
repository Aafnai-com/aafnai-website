import { Outlet } from "react-router-dom";

export default function CompanyLayout() {
    return (
        <div>
            <h1>Company Layout Page</h1>
            <Outlet /> {/* possibly render nested routes here */}
        </div>
    );
}