import React from "react";
import footer from "./Footer.module.scss";
import { FooterContacts } from "../footerContacts/FooterContacts";
export const Footer = ({ logo }) => {
  return (
    <footer className={footer.root}>
      <div className="container">
        <FooterContacts logo={logo} />

        <div className={footer.subscribe}>
          <div className={footer.subscribe_left}>
            <p
              className={[footer.subscribe_title, "content-subtitle"].join(" ")}
            >
              Subscribe to our newsletter
            </p>
            <p className={footer.tagline}>Read about all the things we do.</p>
          </div>
          <div className={footer.subscribe_left}>
            {/* SHOULD ASK THIS ELEMENT IN  FIGMA AS, IT'S NOT CORRECT*/}
          </div>
        </div>
      </div>
    </footer>
  );
};
