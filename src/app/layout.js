import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Breadcrumbs from "./Breadcrumbs";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../styles/layout.css"

export default function layout({children}){
    return(
        <div className="layout">
            <Header />
            <Banner />
            <Breadcrumbs />

            <div className="Layout-body">
                <Sidebar />
                <main className="layout-content1">{children}</main>
            </div>

            <Footer />
        </div>
    );
}