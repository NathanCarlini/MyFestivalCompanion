import connection from "@/db/db";
import ArticleToSend from "@/app/Objects/ArticleToSend";
import User from "@/app/Objects/User";
import { verifyGoogleToken } from "next-auth";
import NowDate from "@/app/Objects/Date";

export async function postarticle(
  articleContent: ArticleToSend,
  currentUser: User
) {
  verifyGoogleToken();

  let articleToSend = new ArticleToSend(
    currentUser.iduser,
    articleContent.title,
    articleContent.text,
    new NowDate().fulldate
  );
  const table = "article";
  const query = `INSERT INTO ${table} (${Object.keys(ArticleToSend).join(
    ", "
  )} VALUES ${Object.values(articleToSend).join(", ")})`;

  const festivalBulkMapInfos = await connection.query(query);
}
