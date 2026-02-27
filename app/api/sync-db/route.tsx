import { NextResponse } from "next/server";
import { sequelize } from "@/lib/db";

import "@/models/candidate";
import "@/models/recruiter";


export async function GET() {
  try {
    await sequelize.sync({ alter: true });

    return NextResponse.json({
      success: true,
      message: "✅ Database synced successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}