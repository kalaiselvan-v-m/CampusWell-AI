import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({ children }) {

    return (

        <div className="h-screen flex bg-[#FDF0D5]">

            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">

                <Navbar />

                <main className="flex-1 overflow-y-auto p-8">

                    {children}

                </main>

            </div>

        </div>

    );

}