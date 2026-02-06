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

export default function Login() {
  const router = useRouter();
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const features: string[] = [
    "Database offers pre-interviewed and AI-assessed candidates",
    "Assessment includes video, coding, and AI-powered evaluations",
    "Events focus on diversity, women empowerment, and immediate joiners",
    "Engage delivers top-rated candidates through impactful hackathons",
  ];

  return (
    

      <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-7xl bg-[#EBF7FF] rounded-2xl p-6 flex flex-col lg:flex-row gap-10">

        {/* LEFT PANEL */}
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
              className="slide-up text-center mt-4"
              sx={{ fontSize: 18, fontWeight: 500 }}
            >
              CHAL Curatal to streamline your tech hiring and get top-tier talent fast.
            </Typography>

            <div className="mt-6 space-y-3">
              {features.map((item, index) => (
                <div
                  key={item}
                  className="slide-up flex items-start gap-3"
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
              className="slide-up mt-6 text-center"
              style={{ animationDelay: "3s" }}
              sx={{ fontSize: 18, fontWeight: 500 }}
            >
              Start your journey today and watch your team thrive!
            </Typography>
          </div>
        </div>
          {/* Right panel*/}
        
            </div>

    
        
      
      </main>

  );
};
