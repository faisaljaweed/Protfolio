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
    <div className="pl-[2rem] pr-[2rem] lg:ml-64">
      <h1 className="text-[24px] font-bold text-start pt-10 text-[#00ae76]">
        Contact me
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="text-start text-[20px] font-semibold text-white">
          Name
        </label>
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
        <label className="text-start text-[20px] font-semibold text-white">
          Email
        </label>
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
        <label className="text-start text-[20px] font-semibold text-white">
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
          <button className="bg-[#00ae76] text-white md:px-7 py-2  md:text-[20px]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
