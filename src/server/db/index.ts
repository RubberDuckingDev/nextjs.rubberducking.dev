import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import * as schema from "./schema";

// export const db = drizzle(sql);

export const db = drizzle(sql, { schema });

// export const getExampleTable = async () => {
//   const selectResult = await db.select().from(ExampleTable);
//   console.log("Results", selectResult);
// };
