import { useAuth } from "../context/AuthContext";
import {
  calculateCurrentCaffeineLevel,
  getCaffeineAmount,
  timeSinceConsumption,
} from "../utils";

function History() {
  const { globalData } = useAuth();
  return (
    <>
      <div className={"section-header"}>
        <i className={"fa-solid fa-timeline"} />

        <h2>History</h2>
      </div>

      <p>
        <i>Hover over for more information.</i>
      </p>

      <div className={"coffee-history"}>
        {Object.keys(globalData)
          .sort((a, b) => {
            b - a;
          })
          .map((utc, index) => {
            const coffee = globalData[utc];
            const timeSinceConsumed = timeSinceConsumption(utc);
            const originalAmount = getCaffeineAmount(coffee.name);
            const remainingAmount = calculateCurrentCaffeineLevel({
              [utc]: coffee,
            });

            const summary = `${coffee.name} | $${coffee.cost} | ${timeSinceConsumed} | ${remainingAmount} mg / ${originalAmount} mg`;

            return (
              <div key={index} title={summary}>
                <i className={"fa-solid fa-mug-hot"} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default History;
