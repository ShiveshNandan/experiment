"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../navbar";
import { allCourses } from "../API/HandleApi";
import Loading from "@/app/Course/Loading";
import "../Course/styles.css"

interface Course {
    id: number;
    subject: string;
    Course: string;
    notes : object;
    playlist: {
          recomended :string,
          other1:string,
          other2:string,
          other3:string
          },
    pyq: {
          major:object,
          minor:object
          },
    book: {
          recomended :  string,
          other1: string,
          other2: string,
          other3: string
      }
  }
  
  const Page = () => {
    
  
    // const [AllCourses, setAllCourses] = useState([]);
    const [AllCourses, setAllCourses] = useState<Course[]>([]);
    
    const ss = async () => {
      await allCourses(setAllCourses);
      console.log(AllCourses)
      console.log("first");
    };
    useEffect(() => {
      ss();
    }, []);
    
    
  
    // const filteredData = AllCourses?.filter(item => item?.Course === "CSE");
    // console.log(filteredData)
  
  
    return (
      <>
        <Navbar params="Courses" />
        {( Object.keys(AllCourses).length === 0) ?  <Loading/> : 
        <>
        <div className="relative top-[8rem]">
          <h1  className="text-4xl font-semibold text-gray-700 mx-auto w-8/12">
            CSE <span className="text-xs">(Computer Science Engineering)</span>
          </h1>
  
          <div className="scroll flex w-8/12 my-5 mx-auto overflow-x-auto">
            <div className="flex">
              {AllCourses?.map((items: any, index) => (
  
                <div key={index} 
                className="flex flex-col w-[20rem] mx-2 rounded-lg shadow-md my-3 bg-blue-300">
                  <Link href={`/Course/${items.subject}`}>
                  <h1
                    className="text-4xl text-gray-700 p-3 min-h-[15rem]  border-b-2 w-full"
                  >
                    {items.subject}
                  </h1>
                  <div className="flex text-gray-600 py-2 px-3 justify-between bg-gray-50 rounded-b-lg">
                    <div className="flex flex-col">
                      <p className="text-xs font-bold uppercase">subject code</p>
                      <h1 className="text-2xl font-bold text-black">
                        {items.id}
                      </h1>
                    </div>
                    <div className="flex my-auto">
                      <h1 className="text-sm">View More</h1>
                      <img
                        className="bg-black w-4 h-4 my-auto mx-2"
                        src=""
                        alt=""
                      />
                    </div>
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
         
        <div className="flex flex-col pt-40 mt-10">
          <h1 className="text-4xl font-semibold text-gray-700 mx-auto w-8/12">
            IT <span className="text-xs">(Information Technology)</span>
          </h1>
  
          <div className="scroll flex w-8/12 my-5 mx-auto overflow-x-auto">
            <div className="flex">
              {AllCourses?.map((items: any, index) => (
                <div key={index} className="flex flex-col w-[20rem] mx-2 rounded-lg shadow-md my-3 bg-green-300">
                  <h1
                    className="text-4xl text-gray-700 p-3 min-h-[15rem]  border-b-2 w-full"
                  >
                    {items.subject}
                  </h1>
                  <div className="flex text-gray-600 py-2 px-3 justify-between bg-gray-50 rounded-b-lg">
                    <div className="flex flex-col">
                      <p className="text-xs font-bold uppercase">subject code</p>
                      <h1 className="text-2xl font-bold text-black">
                        {items.id}
                      </h1>
                    </div>
                    <div className="flex my-auto">
                      <h1 className="text-sm">View More</h1>
                      <img
                        className="bg-black w-4 h-4 my-auto mx-2"
                        src=""
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <div className="flex flex-col py-[3.5rem]">
          <h1 className="text-4xl font-semibold text-gray-700 mx-auto w-8/12">
            ECE <span className="text-xs">(Electronics and Communication Engineering)</span>
          </h1>
  
          <div className="scroll flex w-8/12 my-5 mx-auto overflow-x-auto">
            <div className="flex">
              {AllCourses?.map((items: any, index) => (
                <div key={index} className="flex flex-col w-[20rem] mx-2 rounded-lg shadow-md my-3 bg-yellow-300">
                  <h1
                    className="text-4xl text-gray-700 p-3 min-h-[15rem]  border-b-2 w-full"
                  >
                    {items.subject}
                  </h1>
                  <div className="flex text-gray-600 py-2 px-3 justify-between bg-gray-50 rounded-b-lg">
                    <div className="flex flex-col">
                      <p className="text-xs font-bold uppercase">subject code</p>
                      <h1 className="text-2xl font-bold text-black">
                        {items.id}
                      </h1>
                    </div>
                    <div className="flex my-auto">
                      <h1 className="text-sm">View More</h1>
                      <img
                        className="bg-black w-4 h-4 my-auto mx-2"
                        src=""
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </>}
      </>
    );
  };
  
  export default Page;
  