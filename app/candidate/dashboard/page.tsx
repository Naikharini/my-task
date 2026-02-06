"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Typography from "@mui/material/Typography";
import { Button } from "@/components/ui/button";
import { FaCheckCircle, FaUser, FaUserPlus } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";


export default function login() {
  const router = useRouter();

  return (
    <>
    

      <main className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-7xl w-full bg-[#EBF7FF] rounded-2xl flex flex-col lg:flex-row p-[20px]">
          <div className="flex-1 flex flex-col  lg:flex-row gap-8 p-6">
            <div className="flex-1 flex flex-col lg:flex-row gap-8 ">

          {/* LEFT PANEL */}
          <div className="bg-gradient-to-t from-[#0071B6] to-[#00B2E9] text-white rounded-xl p-8 w-full lg:w-1/2 flex flex-col justify-center min-h-[550px]">
            <Typography variant="h3" fontWeight={700} gutterBottom>
              Create. Harness.
              <br />
              Achieve. Lead.
            </Typography>

            <Typography variant="body1" className="text-white/90 mb-6">
              CHAL Curatal and take the leap towards your dream career!.
            </Typography>

            <ul className="space-y-4">
              {[
                "Build a standout resume with customizable templates",
                "Get matched with jobs tailored to your skills",
                "Know your worth with the Salary Predictor",
                "Ace interviews with expert-led mock sessions",
                "Get assessed, receive personalized insights, and grow with Curatal"
              ].map((text, index) => (
                <li key={index} className="flex gap-3">
                  <FaCheckCircle className="text-green-400 mt-1" />
                  <Typography variant="body2">{text}</Typography>
                </li>
              ))}
            </ul>

            <Typography variant="subtitle1" className="mt-6 font-medium">
              Start your journey today and watch your team thrive!
            </Typography>
          </div>

          {/* RIGHT PANEL */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
            <Typography variant="h4" fontWeight={700} align="center">
              Welcome to Curatal!
            </Typography>

            {/* SIGN IN CARD */}
            <div
              className="rounded-xl p-6 text-white bg-cover bg-center shadow-md"
              style={{ backgroundImage: "url('/auth-bg.png')" }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                Let’s Dive Back In!
              </Typography>

              <Typography variant="body2" className="mb-4">
                Sign in to access your candidate account and continue your journey.
              </Typography>

              <Button
                className="w-full flex gap-2 bg-white hover:bg-blue-700 text-blue-600"
                onClick={() => router.push("/auth/candidate/login")}
              >
                <FaUser />
                Sign In
              </Button>
            </div>

            {/* SIGN UP CARD */}
            <div
              className="rounded-xl p-6 bg-cover bg-center shadow-md"
              style={{ backgroundImage: "url('/auth-bg.png')" }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                New Here?
              </Typography>

              <Typography variant="body2" className="mb-4">
                Create an account to explore exclusive candidate features and opportunities.
              </Typography>

              <Button
                variant="outline"
                className="w-full flex gap-2"
                onClick={() => router.push("/auth/candidate/signup")}
              >
                <FaUserPlus />
                Sign Up
              </Button>
            </div>
          </div>
          </div>
        </div>
        </div>
      </main>
    </>
  );
};
