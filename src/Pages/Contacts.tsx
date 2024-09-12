import React, { useState } from "react";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [questions, setQuestions] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setQuestions("");
  };
  return (
    <div>
      <h1 className="text-[24px] font-bold text-start pt-10">Contact me</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="text-start text-[20px] font-semibold">Name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          className="border-[3px] border-[#00ae76] p-2 my-2"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          required
        />
        <label className="text-start text-[20px] font-semibold">Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          className="border-[3px] border-[#00ae76] p-2 my-2"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          required
        />
        <label className="text-start text-[20px] font-semibold">
          Enter your Questions
        </label>
        <textarea
          placeholder="Enter your Questions"
          rows={5}
          cols={10}
          className="border-[3px] border-[#00ae76] p-2 my-2"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          required
        />
        <div>
          <button className="bg-[#00ae76] text-white">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
