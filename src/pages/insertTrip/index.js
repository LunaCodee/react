import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const NewTripPage = () => {
  const router = useRouter();

  const [tripDestination, setTripDestination] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  const [tripInsertMessage, setTripInsertMessage] = useState("");
  const [showSurprise, setShowSurprise] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const addNewTrip = async () => {
    try {
      const response = await axios.post(
        "https://643d689d6afd66da6af6326f.mockapi.io/Trips",
        {
          Destination: tripDestination,
          ImageUrl: imageURL,
          Date: date,
          Duration: duration,
        }
      );

      console.log("response", response);
      router.push("/");
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleNewTrip = () => {
    setTripInsertMessage("Trip was successfully inserted");
    setShowSurprise(true);
    setTimeout(() => {
      setShowSurprise(false);
      setTripInsertMessage("");
      router.push("/");
    }, 5000);
  };

  const handlePublishTrip = () => {
    if (tripDestination && imageURL && date && duration) {
      addNewTrip();
      handleNewTrip();
    } else {
        setErrorMessage("* Please fill in all the fields");
        setTimeout(() => {
            setErrorMessage("");
          }, 1000);
    }
  };


  return (
    <>
      <Navbar />
      <div>
        <div className={styles.tripForm}>
          <input
            value={tripDestination}
            onChange={(event) => setTripDestination(event.target.value)}
            placeholder="Trip destination"
          />

          <input
            value={imageURL}
            onChange={(event) => setImageURL(event.target.value)}
            placeholder="Image URL"
          />

          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            placeholder="Date"
          />

          <input
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
            placeholder="Duration"
          />

          <button onClick={handlePublishTrip}  className={showSurprise ? styles.surpriseButton : ""}>
            Publish trip
          </button >
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
          {tripInsertMessage && (
            <p
              className={`${styles.surpriseText} ${
                showSurprise ? styles.show : ""
              }`}
            >
              {tripInsertMessage}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewTripPage;