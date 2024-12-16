import { useState } from "react";
import { coffeeOptions } from "../utils/index";

const hoursInDay = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];

const mins = [0, 5, 10, 15, 30, 45];

function CoffeeForm() {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [showOther, setShowOther] = useState(false);

  return (
    <>
      <div className={"section-header"}>
        <i className={"fa-solid fa-pencil"} />
        <h2>Start tracking today</h2>
      </div>

      <h4>Select coffee type</h4>

      <div className={"coffee-grid"}>
        {coffeeOptions.slice(0, 5).map((coffee, coffeeIndex) => {
          return (
            <button key={coffeeIndex} className={"button-card"}>
              <h4>{coffee.name}</h4>

              <p>{coffee.caffeine} mg</p>
            </button>
          );
        })}

        <button
          className={"button-card"}
          onClick={() => setShowOther((show) => !show)}
        >
          <h4>Other</h4>
          <p>N/A</p>
        </button>
      </div>

      {showOther && (
        <select name="coffee-list" id="coffee-list">
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
      <input type="number" className={"w-full"} placeholder={"4.50"} />

      <h4>Time since consumption</h4>
      <div className={"time-entry"}>
        <div>
          <h6>Hours</h6>

          <select name="hours-select" id="hours-select">
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

          <select name="mins-select" id="mins-select">
            {mins.map((min) => {
              return (
                <option value={min} key={min}>
                  {min}
                </option>
              );
            })}
          </select>
        </div>

        <button>Add to track!</button>
      </div>
    </>
  );
}

export default CoffeeForm;
