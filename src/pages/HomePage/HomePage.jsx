import { Link } from "react-router-dom";

import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <section>
        <h1 className={css.title1}>Welcome to Camper Haven!</h1>
        <p className={css.text}>
          Discover the freedom of the open road with our premium camper rentals.
          Whether you’re planning a weekend getaway or a cross-country
          adventure, Camper Haven is your ultimate destination for comfort and
          convenience on wheels.
        </p>
        <h2 className={css.title2}>Why Choose Us?</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <b>Wide Selection:</b> Choose from a variety of modern and
            fully-equipped campers to suit your travel needs.
          </li>
          <li className={css.item}>
            <b>Easy Booking:</b> Our straightforward booking process ensures
            that you can reserve your perfect camper in just a few clicks.
          </li>
          <li className={css.item}>
            <b>Expert Support:</b> Our dedicated team is here to help you with
            every step of your journey, from planning your trip to answering any
            questions during your rental.
          </li>
          <li className={css.item}>
            <b>Affordable Rates:</b> Enjoy competitive pricing without
            compromising on quality or service.
          </li>
        </ul>
        <p className={css.text}>
          Embark on your adventure today and experience the joy of traveling in
          a camper that feels like home.
        </p>
        <Link to="/catalog" className={css.button}>
          Go to catalog
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
