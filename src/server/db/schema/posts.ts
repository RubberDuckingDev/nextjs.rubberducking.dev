import {
  pgTableCreator,
  serial,
  text,
  timestamp,
  uniqueIndex,
  boolean,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `rubberducking_${name}`);

export const posts = createTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 128 }).notNull(),
    slug: varchar("slug", { length: 256 }).notNull().unique(),
    imageUrl: varchar("imageUrl", { length: 2048 }).notNull(),
    blurb: text("blurb").notNull(),
    body: text("body").notNull(),
    featured: boolean("featured").notNull().default(false),
    publishedAt: timestamp("publishedAt"),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (posts) => {
    return {
      slugIndex: uniqueIndex("slug_idx").on(posts.slug),
    };
  }
);
