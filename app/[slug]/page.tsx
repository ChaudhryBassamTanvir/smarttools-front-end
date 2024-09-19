"use client"
import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/app/components/NavBar";

const data = [
  { id: 1, slug: "sum-number" },
  { id: 2, slug: "multiply-number" }
];

export default function Blog({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [inputA, setInputA] = useState<string>('');
  const [inputB, setInputB] = useState<string>('');
  const [result1, setResult1] = useState<number | null>(null);
  const [result2, setResult2] = useState<number | null>(null);

  const handleGetResult = () => {
  
    const a = parseFloat(inputA);
    const b = parseFloat(inputB);
    try { if (!isNaN(a) && !isNaN(b)) {
      if (slug === "sum-number") {
        const newResult1 = a + b;
        const newResult2 = newResult1 - b;
        setResult1(newResult1);
        setResult2(newResult2);
      } else if (slug === "multiply-number") {
        const newResult1 = a * b;
        const newResult2 = newResult1 / b;
        setResult1(newResult1);
        setResult2(newResult2);
      }
    } else {
      setResult1(null);
      setResult2(null);
    }
      
    } catch (error:any) {
      console.log(error.message);
      
      
    }finally{
      // setInputA("")
      // setInputB("")
    
    }
    
   
  };

  return (
    <>
      <Head>
        <title>Smart Tools</title>
      </Head>
      <Navbar />
      <div className="mx-auto pl-2 bg-[#F3F4F6] min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
          <div className="md:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-[#1D1D5DB] mt-4">
              <h2 className="text-2xl font-bold mb-4 text-black">
                Mathematical Tools
              </h2>
              <p className="text-sm mb-4 text-gray-500">
                A complete set of math tools are now at your fingertips,
                addition, multiplication, conversion, and many more.
              </p>
              <div className="flex flex-col items-start">
                <div className="mb-4 w-full">
                  <label
                    className="flex flex-col items-start pl-1 text-gray-700 text-sm font-bold mb-2"
                    htmlFor="inputA"
                  >
                    a
                  </label>
                  <input
                    id="inputA"
                    type="text"
                    value={inputA}
                    onChange={(e) => setInputA(e.target.value)}
                    placeholder="Enter value"
                    className="border rounded py-2 px-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    className=" flex flex-col items-start text-gray-700 text-sm font-bold mb-2"
                    htmlFor="inputB"
                  >
                    b
                  </label>
                  <input
                    id="inputB"
                    type="text"
                    value={inputB}
                    onChange={(e) => setInputB(e.target.value)}
                    placeholder="Enter value"
                    className="border rounded py-2 px-3 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">Formulas</h3>
                {result1 !== null && (
                  <div className="text-sm mb-4 text-gray-500">
                    <p>Result1: {inputA} {slug === "sum-number" ? "+" : "*"} {inputB} = {result1}</p>
                    <p>Result2: {result1} {slug === "sum-number" ? "-" : "/"} {inputB} = {result2}</p>
                  </div>
                )}
                {!result1 && (
                  <div className="text-sm mb-4 text-gray-500">
                    <p>Result1: @input1 {slug === "sum-number" ? "+" : "*"} @input2</p>
                    <p>Result2: @result1 {slug === "sum-number" ? "-" : "/"} @input3</p>
                  </div>
                )}
                <button
                  onClick={handleGetResult}
                  className="p-2 bg-red-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  Get Result
                </button>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <div className="  rounded-lg shadow-lg bg-white text-center border border-[#1D1D5DB] p-2">
              <img
                src="/img1.png"
                alt="Side Image"
                className="rounded-lg Xshadow-md mx-auto w-full  object-cover"
                style={{ maxHeight: "900px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
