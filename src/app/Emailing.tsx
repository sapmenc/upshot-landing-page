"use client";
import emailjs from "@emailjs/browser";
import { PlaceholdersAndVanishInput } from "components/ui/placeholders-and-vanish-input";
import { useState } from "react";

export function Emailing() {
  const placeholders = [
    "Type In Your Email",
    "To Receive Exclusive Updates",
    "On Upshot's",
    "Revolutionary Features",
  ];

  // State to hold the input value
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); // Update email state
  };

  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // EmailJS Config
    const serviceID = "service_u0lnmos";
    const publicKey = "U2tvJQX1Hy5T2u9rF";
    const templateIDuser = "template_byg2gxt";
    const templateIDadmin = "template_zkx6e9a";


    const adminParams = {
      user_email: email,
      admin_message: `New user entered their email: ${email}`,
    };

    const userParams = {
      user_email: email,
      user_message: "Thank you for subscribing to Upshot! Stay tuned for updates.",
    };


    try {
      await emailjs.send(serviceID, templateIDadmin, adminParams, publicKey);
      console.log("Admin notification sent successfully.");
      await emailjs.send(serviceID, templateIDuser, userParams, publicKey);
      alert("Thank you for subscribing to Upshot! Stay tuned for updates.");
      setEmail("");
    } catch (error) {
      console.error("Error sending emails:", error);
      alert("An error occurred while sending emails. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center w-full max-w-2xl mx-auto items-center">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
