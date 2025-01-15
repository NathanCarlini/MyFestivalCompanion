import connection from "@/db/db";
import ArticleToSend from "@/Objects/ArticleToSend";
import User from "@/Objects/User";
import { verifyGoogleToken } from "next-auth";

export async function postarticle(
  articleContent: ArticleToSend,
  currentUser: User
) {
  verifyGoogleToken();

  let articleToSend = new ArticleToSend(
    currentUser.iduser,
    articleContent.title,
    articleContent.text,
    new Date().toDateString()
  );
  const table = "article";
  const query = `INSERT INTO ${table} (${Object.keys(ArticleToSend).join(
    ", "
  )} VALUES ${Object.values(articleToSend).join(", ")})`;

  const festivalBulkMapInfos = await connection.query(query);
}
