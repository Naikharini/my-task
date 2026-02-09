"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Typography from "@mui/material/Typography";
import { Button } from "@/components/ui/button";
import { FaCheckCircle, FaUser, FaUserPlus } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { text } from "stream/consumers";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export default function Signup() {
  const router = useRouter();
   const [email, setEmail] = useState("");  
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const features: string[] = [
     "Build a standout resume with customizable templates",
    "Get matched with jobs tailored to your skills",
    "Know your worth with the Salary Predictor",
    "Ace interviews with expert-led mock sessions",
    "Get assessed, receive personalized insights, and grow with Curatal"
  ];
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-7xl bg-[#EBF7FF] rounded-2xl p-6 flex flex-col lg:flex-row gap-10">
        {/* LEFT PANEL */}
        <div className="flex flex-1 flex-col justify-center gap-4 p-4"> 
          <Typography align="center" sx={{ fontSize: 28, fontWeight: 700 }}>
         Welcome to Curatal 
        </Typography> 
          <Typography align="center" sx={{ fontSize: 18, fontWeight: 500 }}>
            For Candidate
          </Typography>
          <Typography align="center" sx={{ fontSize: 12, fontWeight: 500 }}>
            Your dream job is just a few clicks away
          </Typography>
          <TextField
            variant="outlined" 
            fullWidth 
            label="name@xyz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaUser />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            InputProps={{ 
              startAdornment: (
                <InputAdornment position="start">
                  <FaUser />  
                </InputAdornment>
              ),
            }}
          /> 
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