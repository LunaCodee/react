import React from "react";
import styles from "./styles.module.css";
import Link from "next/link"; 

const TripCard = ({ id, destination, date, duration, imageUrl }) => {
  return (
    <>
      <Link className={styles.link} href={`/trip/${id}`}>
        <div className={styles.card}>
          <h1>{destination}</h1>
          <img className={styles.image} src={imageUrl} />  
        <div className={styles.info}>
          <div>{date}</div>
          <div>{duration}</div>
          </div>  
        </div>
      </Link>
    </>
  );
};

export default TripCard;