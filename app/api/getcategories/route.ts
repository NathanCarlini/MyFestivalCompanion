import connection from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
    const query = "SELECT * FROM festivaltype";
  
    const festivalBulkList = await connection.query(query);
    //  console.log(festivalBulkList.rows)
    return  NextResponse.json(festivalBulkList.rows);
  }