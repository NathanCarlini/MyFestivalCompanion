import Festival from "@/app/Objects/Festival";
import connection from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
    const query = "SELECT name,latitude,longitude FROM festival";
  
    const festivalBulkList = await connection.query(query);
    //  console.log(festivalBulkList.rows)
    return NextResponse.json(festivalBulkList.rows);
  }