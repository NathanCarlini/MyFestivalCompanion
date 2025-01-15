import { OAuth2Client } from "google-auth-library";
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const verifyGoogleToken = async (token: string) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    if (payload) {
      console.log("Token validated :", payload);
      return payload;
    } else {
      throw new Error("Error while validating");
    }
  } catch (error) {
    console.error("Error while validating :", error);
    return null;
  }
};
export { verifyGoogleToken };