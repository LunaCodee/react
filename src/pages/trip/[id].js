import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
// import Navbar from "../../components/Navbar/Navbar";

const Trip = () => {
    const [trip, setTrip] = useState();
  const router = useRouter();
  const fetchEvent = async () => {
    const response = await axios.post(
      `https://643d689d6afd66da6af6326f.mockapi.io/trip/${router.query.id}`,
      { userId: "1234567" }
    );

    const { data } = response;
    setTrip(data);
    console.log("response", response);
  };

  useEffect(() => {
    router.query.id && fetchEvent();
  }, [router.query.id]);
  return (
    <>
      {/* <Navbar /> */}
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
    </>
  );
};

// export async function getServerSideProps(context) {
//   console.log(context.query.id)
//   try {
//     const id = context.query.id;
//     const response = await axios.post(
//       `https://643d689d6afd66da6af6326f.mockapi.io/trip/${id}`
//     );
//     const { data } = response;

//     return { props: { trip: data }};
  
//   } catch (err) {
//     console.log("err", err)
//   }
// }
export default Trip;