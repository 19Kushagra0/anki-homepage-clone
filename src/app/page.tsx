"use client";

import Header from "@/my_components/1_Header/Header";
import Title from "@/my_components/2_Title/Title";
import Advantages from "@/my_components/3_Advantages/Advantages";
import Testimonials from "@/my_components/4_Testimonials/Testimonials";
import Concepts from "@/my_components/5_Concepts/Concepts";
import Contributing from "@/my_components/6_Contributing/Contributing";
import Downloads from "@/my_components/7_Downloads/Downloads";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Title />
      <Advantages />
      <Testimonials />
      <Concepts />
      <Contributing />
      <Downloads />
    </div>
  );
}
