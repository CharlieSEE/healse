import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

const Chart = () => {
  const [labels, setlabels] = useState([]);
  const [values, setvalues] = useState([]);
  ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale
  );
  useEffect(() => {
    const fetchData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      const db = getFirestore();
      const docRef = collection(db, "users", user.uid, "mes");
      const docSnap = await getDocs(docRef);
      docSnap.forEach((doc) => {
        setlabels((oldArray) => [...oldArray, doc.id].sort());
        const dataObj = doc.data();
        setvalues((oldArray) => [...oldArray, dataObj.Weight]);
        console.log("DATA:");
        console.log(dataObj.Weight);
        console.log(doc.id, " => ", doc.data());
      });
      console.log("labesl");
      console.log(`Lables: ${labels}`);
      console.log("valuess");
      console.log(values);
    };
    fetchData();
  }, []);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Weight chart",
      },
    },
  };
  return (
    <div>
      <Line
        options={options}
        datasetIdKey="id"
        data={{
          // labels: ["Jun", "Jul", "Aug"],
          labels: labels,
          datasets: [
            {
              id: 1,
              label: "",
              data: values,
              borderColor: "rgb(130, 171, 255)",
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;
