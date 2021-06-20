import React, { Component } from "react";
import { MdLocalShipping, BsFillStarFill, IoIosMail, FaXbox } from "react-icons/all";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <MdLocalShipping/>,
        title: "Free Shipping",
        info:
          "We provide free shipping across 50 major cities in the naiton for free on any order"
      },
      {
        icon: <BsFillStarFill/>,
        title: "Quality Guaranteed",
        info:
          "Our games come from the most trustworthy sources such as Epic or Steam"
      },
      {
        icon: <IoIosMail/>,
        title: "Free Return",
        info:
          "Free Return within the first 3 days of your purchase"
      },
      {
        icon: <FaXbox/>,
        title: "Multiple Platforms",
        info:
          "We have games from all of the most popular platforms including Switch, Playstation, Xbox, and PC"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Why buy games from Huy?" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
