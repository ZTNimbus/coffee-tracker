/* eslint-disable react/prop-types */
import { useState } from "react";
import { coffeeOptions } from "../utils/index";
import Modal from "./Modal";
import Authentication from "./Authentication";
import { useAuth } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

const hoursInDay = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];

const mins = [0, 5, 10, 15, 30, 45];

function CoffeeForm({ isAuthenticated }) {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [showOther, setShowOther] = useState(false);
  const [coffeeCost, setCoffeeCost] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const { globalData, setGlobalData, globalUser } = useAuth();

  async function handleSubmit() {
    if (!isAuthenticated) return setShowModal(true);

    if (!selectedCoffee) return;

    try {
      const newGlobalData = { ...(globalData || {}) };

      const newData = { name: selectedCoffee, cost: coffeeCost };

      const now = Date.now();
      const timeToSubtract = hour * 60 * 60 * 1000 + min * 60 * 100;
      const timestamp = now - timeToSubtract;

      newGlobalData[timestamp] = newData;

      setGlobalData(newGlobalData);

      const userRef = doc(db, "users", globalUser.uid);
      await setDoc(userRef, { [timestamp]: newData }, { merge: true });

      setSelectedCoffee(null);
      setHour(0);
      setMin(0);
      setCoffeeCost(0);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <Authentication handleCloseModal={handleCloseModal} />
        </Modal>
      )}

      <div className={"section-header"}>
        <i className={"fa-solid fa-pencil"} />
        <h2>Start tracking today</h2>
      </div>

      <h4>Select coffee type</h4>

      <div className={"coffee-grid"}>
        {coffeeOptions.slice(0, 5).map((coffee, coffeeIndex) => {
          return (
            <button
              key={coffeeIndex}
              className={`button-card ${
                selectedCoffee === coffee.name && "coffee-button-selected"
              }`}
              onClick={() => {
                setSelectedCoffee(coffee.name);

                setShowOther(false);
              }}
            >
              <h4>{coffee.name}</h4>

              <p>{coffee.caffeine} mg</p>
            </button>
          );
        })}

        <button
          className={`button-card ${showOther && "coffee-button-selected"}`}
          onClick={() => {
            setShowOther((show) => !show);

            setSelectedCoffee(null);
          }}
        >
          <h4>Other</h4>
          <p>N/A</p>
        </button>
      </div>

      {showOther && (
        <select
          name="coffee-list"
          id="coffee-list"
          onChange={(e) => {
            setSelectedCoffee(e.target.value);
          }}
        >
          <option value={null}>Select coffee</option>

          {coffeeOptions.map((coffee, coffeeIndex) => {
            return (
              <option value={coffee.name} key={coffeeIndex}>
                {coffee.name} | {coffee.caffeine} mg
              </option>
            );
          })}
        </select>
      )}

      <h4>Add the Cost ($)</h4>
      <input
        type="number"
        className={"w-full"}
        placeholder={"4.50"}
        value={coffeeCost}
        onChange={(e) => setCoffeeCost(e.target.value)}
      />

      <h4>Time since consumption</h4>
      <div className={"time-entry"}>
        <div>
          <h6>Hours</h6>

          <select
            name="hours-select"
            id="hours-select"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          >
            {hoursInDay.map((hour) => {
              return (
                <option value={hour} key={hour}>
                  {hour}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <h6>Minutes</h6>

          <select
            name="mins-select"
            id="mins-select"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          >
            {mins.map((min) => {
              return (
                <option value={min} key={min}>
                  {min}
                </option>
              );
            })}
          </select>
        </div>

        <button onClick={handleSubmit}>Add to track!</button>
      </div>
    </>
  );
}

export default CoffeeForm;
