import connection from "@/db/db";
import { verifyGoogleToken } from "@/utils/googletokenverifier";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

function cleaner(texte: string) {
  const prefixes = [" ", "le", "la", "l'", "de", "du"];

  // Vérifier si les premiers caractères correspondent à un des préfixes
  for (const prefix of prefixes) {
    if (texte.substring(0, prefix.length) === prefix) {
      texte = texte.toLowerCase()
      return texte.substring(prefix.length);
    }
  }
  if(texte.length)
  return texte; // Si aucun préfixe trouvé, retourne le texte inchangé
}

export async function GET() {
  const query = `SELECT spectacle from festivalgeo;`;

  const accountInformations = await connection.query(query);

  let notempty = accountInformations.rows.filter((row) => row.spectacle !== "");
  let alltypes: Array<String> = [];
  alltypes = [];
  let types;
  notempty.forEach((row) => {
    // console.log(row.spectacle);
    if(row.spectacle != null){
      types = row.spectacle.split(/[,\-;\/]/);
      types.forEach((type: string) => {
        type = cleaner(type) || "";
        // console.log(type);
        if (type.endsWith(' ')) {
          type = type.slice(0, -1);
      }
        if (!alltypes.includes(type) && type !== "") {
          alltypes.push(type);
        }
      });
    }
  });
  alltypes.forEach((type: any) => {
    console.log(type);
  });

  console.log(
    "smldkfmlsdkfmsdkflkmfksdmlfksmlkdfsmldkfmlskdfmlskdfksdmlfksdmlfksmdlkfsmlkdfmlsdkfmlk"
  );
  console.log(alltypes);

  return NextResponse.json(true);
}
// runner();
