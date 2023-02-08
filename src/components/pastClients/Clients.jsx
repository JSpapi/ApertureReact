import React from "react";
import clients from "./Clients.module.scss";

export const Clients = () => {
  return (
    <section className={clients.root}>
      <div className="container">
        <div className={clients.content}></div>
      </div>
    </section>
  );
};
