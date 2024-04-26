import {
  pgTableCreator,
  serial,
  text,
  timestamp,
  uniqueIndex,
  boolean,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `rubberducking_${name}`);

export const posts = createTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull().unique(),
    image: text("image").notNull(),
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
