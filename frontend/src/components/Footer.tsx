import Link from "@material-ui/core/Link/Link";
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
        <div className="container text-center">
          <small className={`p-2`}>
            <Link href="https://www.systemsoft.no/Sobekklia/daily.htm">
              Værrapporter
            </Link>
          </small>
          <small className={`p-2`}>
            <Link href="https://www.yr.no/nb/v%C3%A6rvarsel/daglig-tabell/1-114806/Norge/Innlandet/S%C3%B8r-Aurdal/Hedalen%20stavkirke">
              Yr - Hedalen Stavkirke
            </Link>
          </small>
          <small className={`p-2`}>
            <Link href="http://hedalen.no/loypelag/">Hedalen Løypelag</Link>
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
