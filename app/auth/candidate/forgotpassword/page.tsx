"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Typography from "@mui/material/Typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CuratalLogo from "@/public/curatalLogo.jpg";
export default function ForgotPassword() {
    const router = useRouter();
    
    return (
        <main className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="w-full max-w-7xl bg-[#EBF7FF] rounded-2xl p-6 flex flex-col lg:flex-row gap-10">
                {/* LEFT PANEL */}
                <div className="hidden lg:flex items-center justify-center">
                    <div className="h-[520px] w-[520px] rounded-xl bg-[url('/forgotpassword.jpg')] bg-cover bg-center p-9  flex flex-col justify-center">
                        </div>
                </div>
                {/* RIGHT PANEL */}
                <div className="flex flex-1 flex-col justify-center gap-4 p-4">
                    <div className="h-[520px] w-[520px] rounded-xl bg-cover bg-center p-2  flex flex-col justify-center">
                     <div className=" p-1 flex justify-end w-full gap-4" >
                        <Image src={CuratalLogo} alt="Curatal Logo"  width={140} height={44}className="h-[44px] w-auto" priority 
                         align="right"/>
                    </div>  
                    <div className="flex flex-col gap-4 p-4 justify-center">
                    <Typography align="center" sx={{ fontSize: 28, fontWeight: 700 }}>
                        Forgot Password?
                    </Typography>
                    
                    <Typography variant="body2" className="mb-5 text-xs text-title">We will send a verification link to the given email ID. Please click on the link to
                       reset your password.
                        </Typography>
                        <Typography align="center" sx={{ fontSize: 12, fontWeight: 500, color: "black", marginBottom: "10px"  }}>
                        Enter Email ID
                        </Typography>
                        <input type="email" placeholder="name@email.com" className="border border-gray-300 rounded-md px-4 py-2 w-full" />
                        <Typography align="center" sx={{ fontSize: 12, fontWeight: 500, color: "#f7350f", cursor: "pointer" }}>
                        Email Is Required
                        </Typography>
                        <button
                            onClick={() => router.push("/auth/candidate/login")}
                            className="bg-[#0071B6] text-white px-6 py-3 text-base rounded-md hover:opacity-90 w-full mt-4"
                        >
                            Submit
                        </button>
                        </div>
                     </div>
                    </div>
                    </div>
            
    
        </main>
    );
};