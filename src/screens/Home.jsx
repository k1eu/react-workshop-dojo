import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import Episode from "../components/Episode";
import Sidebar from "../components/Sidebar";

export default function Home() {

  return (
    <>
      <h1>Rick & Morty</h1>
      <main className="main">
        <Sidebar />
        <hr />
        <Outlet />
      </main>
    </>
  );
}
