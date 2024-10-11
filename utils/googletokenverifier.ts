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
      console.log("Token validé avec succès:", payload);
      return payload;
    } else {
      throw new Error("Échec de la validation du token");
    }
  } catch (error) {
    console.error("Erreur lors de la vérification du token:", error);
    return null;
  }
};
export { verifyGoogleToken };