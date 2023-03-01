import React from "react";

export default function ResultSuccess({
  name,
  convertToPercents,
  sex,
  probability,
}) {
  return (
    <div>
      {console.log(sex)}
      {sex
        ? `${name} is ${sex} with ${convertToPercents(
            probability
          )}% probability`
        : "Пол не определен"}
    </div>
  );
}
