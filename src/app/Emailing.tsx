"use client"

import { PlaceholdersAndVanishInput } from "components/ui/placeholders-and-vanish-input";

 
export function Emailing() {
  const placeholders = [
    "Type In Your Email",
    "To Recieve Exclusive Updates",
    "On Upshot's ",
    "Revolutionary Features"
  ];
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex flex-col justify-center w-full max-w-2xl mx-auto items-center ">
     
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
