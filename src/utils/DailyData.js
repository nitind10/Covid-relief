import React, { useState, useEffect } from "react";

const DailyData = ({ callback }) => {
  // const [state, setState] = useState([]);

  const fetchData = fetch(
    "https://api.covid19india.org/v4/min/data.min.json"
  ).then((res) => {
    return res.json();
  });

  useEffect(() => {
    // console.log(state);
    const printData = async () => {
      const data = await fetchData;
      // console.log(data);
      // setState(data);
      callback(data);
    };
    printData();
  }, []);
  return <div>state</div>;
};

export default DailyData;
