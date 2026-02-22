"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FaUser, FaPhone, FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Signup() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    password: "",
    agree: false,
  });
  const [errors, setErrors] = useState({
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  password: "",
});

  const features: string[] = [
    "Database offers pre-interviewed and AI-assessed candidates",
    "Assessment includes video, coding, and AI-powered evaluations",
    "Events focus on diversity, women empowerment, and immediate joiners",
    "Engage delivers top-rated candidates through impactful hackathons",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log(form);
  };
  
  const validate = () => {
  let temp: any = {};

  temp.firstName = form.firstName ? "" : "First Name is required";
  temp.lastName = form.lastName ? "" : "Last Name is required";
  temp.company = form.company ? "" : "Company Name is required";

  temp.email = form.email
    ? /\S+@\S+\.\S+/.test(form.email)
      ? ""
      : "Email is not valid"
    : "Email is required";

  temp.phone = form.phone
    ? form.phone.length === 10
      ? ""
      : "Mobile number must be 10 digits"
    : "Mobile number is required";

  temp.password = form.password
    ? form.password.length >= 6
      ? ""
      : "Minimum 6 characters required"
    : "Password is required";

  setErrors(temp);

  return Object.values(temp).every((x) => x === "");
};

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-7xl bg-[#EBF7FF] rounded-2xl p-6 flex flex-col lg:flex-row gap-10">

        {/* LEFT PANEL */}
        <div className="flex flex-1 flex-col justify-center gap-4 p-10 justify-items-center ">
         <div className="h-[520px] w-[520px] rounded-xl p-9 text-black flex flex-col justify-center">
            
          <Typography align="center" sx={{ fontSize: 28, fontWeight: 700 }}>
            Welcome to Curatal
          </Typography>

          <Typography align="center" sx={{ fontSize: 18, fontWeight: 700, fontStyle:"sora" }}>
            For Employer 
          </Typography>

          <Typography align="center" sx={{ fontSize: 12, fontWeight: 400 }}>
          Find top talent in just a few clicks!
          </Typography>
          <div className="gap-2 mt-4">
          <Typography align="left" sx={{ fontSize: 12, color: "red" }}>
            * All fields are mandatory
            </Typography>
            </div>
          {/* FIRST + LAST NAME */}
          <div className="flex gap-4 p-2">
            <TextField
              fullWidth
              placeholder="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              placeholder="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          {/* COMPANY */}
          <div className="flex gap-4 p-2">
          <TextField
            fullWidth
            placeholder="Company Name"
            name="company"
            value={form.company}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                
                </InputAdornment>
              ),
            }}
          />
          </div>

          {/* EMAIL */}
           <div className="flex gap-4 p-2">
          <TextField
            fullWidth
            placeholder="Email ID"
            name="email"
            value={form.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              ),
            }}
          />
         </div>
          {/* PHONE */}
            <div className="flex gap-4 p-2">
          <TextField
            fullWidth
            placeholder="Mobile Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaPhone />
                </InputAdornment>
              ),
            }}
          />
          </div>

          {/* PASSWORD */}
            <div className="flex gap-4 p-2">
          <TextField
            fullWidth
            placeholder="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <div
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </InputAdornment>
              ),
            }}
          />
          </div>
          {/* TERMS */}
          <FormControlLabel
            control={
              <Checkbox
                name="agree"
                checked={form.agree}
                onChange={handleChange}
              />
            }
            label="I agree to Privacy Policy & Terms"
          />

          <button
                  onClick={() => router.push("/auth/recruiter/login")}
                  className="bg-[#0071B6] text-white px-5 py-3 text-base rounded-md hover:opacity-90"
                >
                  Sign Up
                </button>
                <div className="gap-2 mt-4">
          <Typography align="center" sx={{ fontSize: 14, fontWeight: 500 }}>
            If You Have An Existing Account,{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => router.push("/auth/recruiter/login")}
            >
              Sign In!
            </span> 
          </Typography>
        </div>
        </div>
        </div>
        {/* RIGHT PANEL */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="h-[520px] w-[520px] rounded-xl bg-gradient-to-t from-[#0071B6] to-[#00B2E9] p-9 text-white flex flex-col justify-center">
            <Typography
              component="div"
              className="typing typing-1 text-center"
              sx={{ fontSize: 27, fontWeight: 800 }}
            >
              Create. Harness.
            </Typography>
            <Typography
              component="div"
              className="typing typing-2 text-center"
              sx={{ fontSize: 27, fontWeight: 800 }}
            >
              Achieve. Lead.
            </Typography>
            <Typography
              className="slide-up  mt-4"
              sx={{ fontSize: 18, fontWeight: 500 }}
            >
              CHAL Curatal and take the leap towards your dream career!
            </Typography>
            <div className="mt-6 space-y-3">
              {features.map((item, index) => (
                <div
                  key={item}                  className="slide-up flex items-start gap-4"
                  style={{ animationDelay: `${1.6 + index * 0.2}s` }}
                >
                  <Image
                    src="/checkmark.png"
                    alt="check"
                    width={32}
                    height={32}
                  />
                  <Typography sx={{ fontSize: 16 }}>
                    {item}
                  </Typography>
                </div>
              ))}
            </div>
            <Typography
              className="slide-up mt-6 text-center gap-4"
              style={{ animationDelay: "3s" }}
              sx={{ fontSize: 18, fontWeight: 500 }}
            >
             Start your journey today and watch your career thrive!
            </Typography>
          </div>
           </div>   
        </div>
        </main>
  );
};