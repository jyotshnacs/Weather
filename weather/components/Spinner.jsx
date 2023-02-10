import React from "react";
import spinner from "../public/Spinner.png";

const Spinner = () => {
  return (
    <>
      <Image
        className="w-[200px] m-auto block"
        src={Spinner}
        alt="loading..."
      />
    </>
  );
};

export default Spinner;
