import connection from "@/db/db";
import { verifyGoogleToken } from "@/utils/googletokenverifier";
import { cookies } from "next/headers";

export async function getuser(id: number) {
  const cookieStore = cookies();
  // remove the ! before tests
  const tokenCookie = cookieStore.get("next-auth.session-token")!.value;

  try {
    verifyGoogleToken(tokenCookie);

    const query = `SELECT name, email, imageprofil, password, isverified FROM account WERE id = ${id}`;

    const accountInformations = await connection.query(query);

    return accountInformations.rows;
  } catch(_e){

  }
}
