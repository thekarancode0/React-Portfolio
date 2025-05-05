import React from "react";
export default function About() {
  return (
    <div className="min-h-screen flex justify-center items-center mt-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full  p-10">
        <div className="rounded bg-red-500  min-h-40 md:col-span-3">About</div>
        <div className="rounded bg-red-500  min-h-40">Skill</div>
        <div className="rounded bg-red-500  min-h-40  ">Education</div>
      </div>
    </div>
  );
}
