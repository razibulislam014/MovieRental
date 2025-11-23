import { useContext } from "react";
import MovieList from "./cine/MovieList";
import { ThemeContext } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Page() {
  const { darkMood } = useContext(ThemeContext);

  console.log(darkMood);

  return (
    <div
      className={`h-full w-full ${darkMood ? "bg-[#171923] text-white" : ""}`}
    >
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-14">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
