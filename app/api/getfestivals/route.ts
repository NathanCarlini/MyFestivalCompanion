import connection from "@/db/db";

export async function getfestivals() {
  const query = "SELECT * FROM festival";

  const festivalBulkList = await connection.query(query);
  //  console.log(festivalBulkList.rows)
  // return festivalBulkList.rows
}

export async function getfestivalsformap() {
  const query = "SELECT id, name,siteinternet,latitude,longitude FROM festival";

  const festivalBulkMapInfos = await connection.query(query);
   
  return festivalBulkMapInfos.rows
}

export async function getfestival(id: number) {
  const query = `SELECT * FROM festival WERE id = ${id}`;

  const festivalBulkMapInfos = await connection.query(query);
   
  return festivalBulkMapInfos.rows
}
