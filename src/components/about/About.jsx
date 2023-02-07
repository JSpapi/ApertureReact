import React from "react";
import about from "./About.module.scss";
import { CardList } from "./CardList";
export const About = () => {
  return (
    <section className={about.root}>
      <div className="container">
        <div className={about.content}>
          <h2 className={[about.title, "section-title"].join(" ")}>
            What we do.
          </h2>
          <h3 className={[about.subtitle, "section-subtitle"].join(" ")}>
            The areas that we're specialized in.
          </h3>
			 <CardList/>
        </div>
      </div>
    </section>
  );
};
