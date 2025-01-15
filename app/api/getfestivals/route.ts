import connection from "@/db/db";

export async function getfestivals() {
  const query = "SELECT * FROM festival";

  const festivalBulkList = await connection.query(query);
  //  console.log(festivalBulkList.rows)
  return festivalBulkList.rows
}

export async function getfestivalsformap() {
  const query = "SELECT id, name,siteinternet,latitude,longitude FROM festival";

  const festivalBulkMapInfos = await connection.query(query);
   
  return festivalBulkMapInfos.rows
}

export async function getfestivalbygenre(id: number) {
  const query = `SELECT * FROM festival 
                  Left join festivalnewgenre on festival.idfestival = festivalnewgenre.festival_idfestival
                  Left join newgenre on festivalnewgenre.newgenre_idnewgenre = newgenre.idnewgenre
                  where newgenre.idnewgenre = ${id}`;

  const festivalBulkMapInfos = await connection.query(query);
   
  return festivalBulkMapInfos.rows
}

export async function getfestivalbyname(name: string) {
  const query = `SELECT * FROM festival WERE name Like '%${name}%' `;

  const festivalBulkMapInfos = await connection.query(query);
   
  return festivalBulkMapInfos.rows
}

export async function getfestivalsbyarg(argandvalues: Array<Object>){
  let query = `SELECT * FROM festival WHERE `;
  argandvalues != null ? argandvalues.forEach(element => {
    
      let cond = `${Object.keys(element)[0] = Object.values(element)[0]}`

      if (argandvalues.length > 1 && argandvalues.indexOf(element) < argandvalues.length - 1) {
        cond += ` AND `
    }
    query += cond + ` ;`
  }) : query = `SELECT * FROM festival ;`;

  const festivalBulkMapInfos = await connection.query(query);
   
  return festivalBulkMapInfos.rows
}
