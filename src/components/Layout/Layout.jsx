import { Toaster } from "react-hot-toast";
import SideBar from "../SideBar/SideBar.jsx";
import AppBar from "../AppBar/AppBar.jsx";

import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
        <main>
          <div className={css.container}>
            <SideBar />
            <section>
              {children}
            </section>
          </div>
        </main>
      <Toaster
        position="bottom-right"
        gutter={8}
        toastOptions={{
          duration: 6000,
          style: {
            background: "green",
            color: "#fff",
          },
        }}
      />
    </>
  );
};

export default Layout;