"use client";
import React from "react";
import SearchComponent from "./searchComponent";
import { useRouter } from "next/navigation";

const CardComponent = ({slug,description}:{slug:string; description:string}) => {

  const router = useRouter()
  const move_to_sum=()=>{
    router.push('/sum-number')
  }
  const move_to_mul=()=>{
    router.push('/multiply-number')
  }
  return (
    <div className="mx-auto pl-2 bg-[#F3F4F6]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
        <div className="md:col-span-3">
          <SearchComponent />
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-[#1D1D5DB] mt-4">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Mathematical Tools
            </h2>
            <p className="text-sm mb-4 text-gray-500">
              A complete set of math tools are now at your fingertips,
              addition, multiplication, conversion, and many more.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="card cursor-pointer border border-[#1D1D5DB] bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-80" onClick={move_to_sum}>
                <img
                  src="/card1.png"
                  alt="Card 1"
                  className="mx-auto"
                  style={{ width: "80px", height: "75px" }}
                />
                <p className="text-md font-semibold text-black">Sum Numbers</p>
              </div>
              <div className="card cursor-pointer border border-[#1D1D5DB] bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-80" onClick={move_to_mul}>
                <img
                  src="/card22.png"
                  alt="Card 2"
                  className="mx-auto"
                  style={{ width: "80px", height: "80px" }}
                />
                <p className="text-md font-semibold text-black">
                  Multiply Numbers
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-[#1D1D5DB] mt-4">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Measurement Tools
            </h2>
            <p className="text-sm mb-4 text-gray-500">
              A complete set of length measurement tools are now at your fingertips.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="card bg-white p-6 cursor-pointer rounded-lg shadow-lg text-center border border-[#1D1D5DB]"
                >
                  <img
                    src={`/card22.png`}
                    alt={`Card ${index + 1}`}
                    className="mx-auto mb-4"
                    style={{ width: "80px", height: "75px" }}
                    />
                  <p className="text-lg font-semibold text-black">
                    Card {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="rounded-lg shadow-lg bg-white text-center border border-[#1D1D5DB] p-2">
            <img
              src="/img1.png"
              alt="Side Image"
              className="rounded-lg shadow-md mx-auto w-full h-auto object-cover"
              style={{ maxHeight: "900px" }}
            />
          </div>
          <div className="rounded-lg shadow-lg bg-white text-center border border-[#1D1D5DB] p-2 mt-4">
            <img
              src="/img1.png"
              alt="Side Image"
              className="rounded-lg shadow-md mx-auto w-full h-auto object-cover"
              style={{ maxHeight: "900px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
