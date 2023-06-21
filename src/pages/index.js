import React, { useState } from "react";
import axios from "axios";
import TripCard from "../components/tripCard/TripCard";
import styles from "./styles.module.css";
// import Navbar from "../components/Navbar/Navbar";


const MainPage = ({events}) => {
  const [trips, setTrips] = useState(events);


  return (
    <>
    {/* <Navbar /> */}
    
    <div>
      <div className={styles.cardsWrapper}>
        {trips.map((trip) => (
          <div key={trip.id}>
          <TripCard
            id={trip.id}
            destination={trip.Destination}
            date={trip.Date}
            duration={trip.Duration}
            imageUrl={trip.ImageUrl}
          />
          </div>
      ))} 
      </div> 
    </div>
    </>
  );
};

export default MainPage;

export async function getServerSideProps() {

  try{
    const response = await axios.get("https://643d689d6afd66da6af6326f.mockapi.io/Trips");
    const { data } = response;
    console.log(data);
  return {props: {events: data}}
   } catch(err){
    console.log("err", err)
  };
}

