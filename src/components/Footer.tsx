import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      {/* There exists no React Bootstrap component for footer.
      Hence, ordinary Bootstrap CSS is used. */}
      <footer className={`${styles.stickyFooter} py-4 bg-light text-dark`}>
        <div className="container text-center">
          <small>Copyright &copy; Magnus Rødseth 2020</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
