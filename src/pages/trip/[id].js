import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";

const Trip = ({ data }) => {

  const router = useRouter();
  const [bookingMessage, setBookingMessage] = useState("");
  const [showSurprise, setShowSurprise] = useState(false);

  const handleBookTrip = () => {

    setBookingMessage("Congratulations! You've booked the trip. Enjoy!");
        setShowSurprise(true);
    setTimeout(() => {
      setShowSurprise(false);
      setBookingMessage(false)
      router.push("/");
    }, 3000);
  
  };
  return (
    <>
      <Navbar />
      <div className={styles.pageWrapper}>
        {data && (
          <div className={styles.wrapper}>
            <h1>{data.Destination}</h1>
            <img className={styles.image} src={data.ImageUrl} />
            <div className={styles.info}>
              <h3>Trip date: {data.Date}</h3>
              <h3>Duration: {data.Duration}</h3>
            </div>
            <button
              onClick={handleBookTrip}
              className={showSurprise ? styles.surpriseButton : ""}
            >
              BOOK TRIP
            </button>
            {bookingMessage && <p className={`${styles.surpriseText} ${showSurprise ? styles.show : ""}`}>
                {bookingMessage}
              </p>}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const id = context.query.id;
    const response = await axios.get(
      `https://643d689d6afd66da6af6326f.mockapi.io/Trips/${id}`
    );
    const { data } = response;

    return { props: { data } };
  } catch (err) {
    console.log("err", err);
  }
}

export default Trip;