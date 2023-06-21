import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Navbar from "../../components/Navbar/styles.module.css";
import Footer from "../../components/Footer/Footer";

const Trip = (trip) => {
console.log(trip)
  return (
    <>
      {/* <Navbar />
      <div className={styles.pageWrapper}>
        {trip && (
          <div className={styles.wrapper}>
            <h1>{trip.Destination}</h1>
            <img className={styles.image} src={trip.ImageUrl} />

            <div className={styles.contentWrapper}>
              <div className={styles.info}>
                <h3>{trip.Date}</h3>
                <h3>{trip.Duration}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
  <Footer /> */}
    </>
  );
};

export async function getServerSideProps(context) {
  console.log(context.query.id)
  try {
    const id = context.query.id;
    const response = await axios.get(
      `https://643d689d6afd66da6af6326f.mockapi.io/Trips/${id}`
    );
    console.log(response)
    const { data } = response;

    return { props: { data }};
  
  } catch (err) {
    console.log("err", err)
  }
}
export default Trip;