import React, {useState } from "react";
export default function Contact() {

  const [formData, setFormData] = useState({
    fName:"",
    lName:"",
    email:"",
    message:""
  })
  const handleChange = (e) =>{
    setFormData((prevData)=>({
      ...prevData, [e.target.name]:e.target.value
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Submitted",formData);
    alert("Submitted");

    setFormData({
      fName:"",
      lName:"",
      email:"",
      message:""
    })
  }

  return (
    <div className="min-h-screen h-screen flex  justify-center items-center mt-14`">
      <form onSubmit={handleSubmit}>
        <div className=" mx-auto w-96  p-4 rounded-lg grid gap-4 grid-cols-1 md:grid-cols-2 text-red-700">
          <input
            className={` h-10 pl-2 rounded text-black border outline-none shadow-md `} 
            type="text"
            placeholder="First Name:"
            name="fName"
            value={formData.fName}
            onChange={handleChange}
            required
          />
          <input
            className=" h-10 pl-2 rounded text-black border outline-none shadow-md"
            type="text"
            name="lName"
            value={formData.lName}
            onChange={handleChange}
            placeholder="Last Name:"
          />
          <input
            className=" h-10 pl-2 rounded text-black border md:col-span-2 outline-none shadow-md "
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
          <textarea
            className=" h-32 pl-2 rounded text-black border md:col-span-2  resize-none outline-none shadow-md "
            name="message"
            id="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Comment your thoughts"
          ></textarea>
        </div>
        <div className="w-screen flex justify-center items-center">
         <button className="border rounded bg-blue-600 px-3 mt-5 items-center w-80 text-black" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
