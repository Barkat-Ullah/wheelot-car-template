"use client";

import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full max-w-full min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />
            <main className="w-full max-w-full flex-1 overflow-x-hidden">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;