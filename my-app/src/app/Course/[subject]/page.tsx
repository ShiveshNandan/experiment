"use client";
import { allCourses } from "@/app/API/HandleApi";
import Navbar from "@/app/navbar";
import React, { useEffect, useState } from "react";
import Loading from "@/app/Course/Loading";
import Link from "next/link";
// import book from "@/public/books.png"
// import video from "@/public/"
import Image from 'next/image';

interface Course {
  id: number;
  subject: string;
  Course: string;
  notes: object;
  playlist: {
    recomended: string;
    other1: string;
    other2: string;
    other3: string;
  };
  pyq: {
    major: object;
    minor: object;
  };
  book: {
    recomended: "";
    other1: "";
    other2: "";
    other3: "";
  };
}

const page = ({ params }: any) => {
  const subjectName = params.subject.replace(/%20/g, " ").replace(/%2C/g, ",");
  const [AllCourses, setAllCourses] = useState<Course[]>([]);

  useEffect(() => {
    const ss = async () => {
      await allCourses(setAllCourses);
      console.log("first");
    };
    ss();
  }, []);

  console.log(subjectName)
  const filteredData = AllCourses?.filter(
    (item) => item?.subject === subjectName
  );
  console.log(filteredData[0]?.subject)

  return (
    <>
      <Navbar params="Courses" />
      {(typeof AllCourses === 'object' && Object.keys(AllCourses).length === 0) ?  <Loading/> : 
      <>
        <div className="flex flex-col bg-gradient-to-b from-indigo-500 h-[30vh]">
          <h1 className="m-auto pt-[15vh] text-4xl font-bold mb-10">
            {filteredData[0]?.subject}
          </h1>
          <div className="flex w-7/12 flex-col m-auto">
            <h1>
              <span className="font-bold uppercase">Subject id :</span>{" "}
              {filteredData[0]?.id}{" "}
              <i className="text-gray-700 text-xs"> (may change with time)</i>
            </h1>
            <h1 className="font-bold uppercase mt-5 ">Books</h1>
                <div className="flex flex-col mx-2 mt-3">
                <Link className="w-fit" target="_blank" href={`${filteredData[0]?.playlist.recomended}`}>
                  <div className="flex bg-gray-400 w-[8rem] h-40 rounded-md">
                  {/* <Image className="mx-auto" src={"book"} height={10} width={100} alt="book"></Image> */}
                  </div>
                </Link>
                </div>
            


            <h1 className="font-bold uppercase mt-5 ">Playlist</h1>
                <div className="flex flex-col mx-2">
                <h1 className="font-semibold my-1 mt-3">Recomended :</h1>
                <Link className="w-fit" target="_blank" href={`${filteredData[0]?.playlist.recomended}`}>
                  <div className="flex bg-gray-400 w-80 h-40 p-10 rounded-md">
                  {/* <Image className="mx-auto" src={"video"} height="10" width={70} alt="video"></Image> */}
                  </div>
                </Link>
                </div>
            <div className="flex flex-col mx-2">
            <h1 className="font-semibold my-1 mt-3">Others :</h1>
              <div className="flex overflow-x-scroll pb-5">



                <div className="flex flex-col">
                <Link target="_blank" href={`${filteredData[0]?.playlist.other1}`}>
                  <div className="flex bg-gray-400 p-10 w-80 h-40 rounded-md">
                  {/* <Image className="mx-auto" src={"video"} height="10" width={70} alt="video"></Image> */}
                  </div>
                  </Link>
                </div>


              </div>
            </div>
            <h1 className="font-bold uppercase mt-5">PYQs <i className="text-xs ">(previous year question Papers)</i></h1>

            <div className="flex flex-col">
            <div className="flex flex-col mx-2">
            <h1 className="font-semibold my-1 mt-3">Mid-sem :</h1>
              <div className="flex overflow-x-scroll pb-5">



                <div className="flex flex-col">
                <Link target="_blank" href={`${filteredData[0]?.playlist.other1}`}>
                  <div className="flex bg-gray-400 w-40 h-40 rounded-md"></div>
                  </Link>
                </div>


              </div>
            </div>

            <div className="flex flex-col mx-2">
            <h1 className="font-semibold my-1 mt-3">End-sem :</h1>
              <div className="flex overflow-x-scroll pb-5">



                <div className="flex flex-col">
                <Link target="_blank" href={`${filteredData[0]?.playlist.other1}`}>
                  <div className="flex bg-gray-400 w-40 h-40 rounded-md"></div>
                  </Link>
                </div>


              </div>
            </div>

            </div>
            
          </div>
        </div>
      </>
      } 
    </>
  );
};

export default page;
