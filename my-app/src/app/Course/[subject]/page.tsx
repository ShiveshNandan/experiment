"use client"
import Navbar from '@/app/navbar'
import React, { useEffect, useState } from 'react'
import { allCourses } from "@/app/API/HandleApi";


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

const page = ({params}:any) => {
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
    </>
  )
}

export default page
