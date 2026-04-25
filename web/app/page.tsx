"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [resOne, setResOne] = useState<string>("");
  const [resTwo, setResTwo] = useState<string>("");
  const [resThree, setResThree] = useState<string>("");

  const handleClickOne = async () => {
    try {
      const res = await axios.get("http://localhost:4000/order");
      setResOne(res.data);
    } catch (err) {
      console.log(err);
      setResOne("Error fetching data");
    }
  };

  const handleClickTwo = async () => {
    try {
      const res = await axios.get("http://localhost:4000/product");
      setResTwo(res.data);
    } catch (err) {
      setResTwo("Error fetching data");
      console.log(err)
    }
  };

  const handleClickThree = async () => {
    try {
      const res = await axios.get("http://localhost:4000/user");
      setResThree(res.data);
    } catch (err) {
      setResThree("Error fetching data");
      console.log(err)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-100">
      <h1 className="text-2xl font-bold">Test</h1>

      {/* Button 1 */}
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={handleClickOne}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Fetch order
        </button>
        {resOne && <p className="text-gray-700">{resOne}</p>}
      </div>

      {/* Button 2 */}
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={handleClickTwo}
          className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          Fetch product
        </button>
        {resTwo && <p className="text-gray-700">{resTwo}</p>}
      </div>

      {/* Button 3 */}
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={handleClickThree}
          className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          Fetch user
        </button>
        {resThree && <p className="text-gray-700">{resThree}</p>}
      </div>
    </div>
  );
}
