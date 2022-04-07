enum Reactions {
  like = "👍",
  dislike = "👎",
  love = "❤️",
  meh = "🤔",
  hate = "😡",
  sad = "😢",
  surprised = "😮",
  crying = "😭",
  happy = "😊",
}

enum Roles {
  admin = "admin",
  staff = "staff",
  user = "user",
  guest = "guest",
}
export enum Rating {
  awful = "",
  terrible = "⭐",
  bad = "⭐⭐",
  average = "⭐⭐⭐",
  good = "⭐⭐⭐⭐",
  excellent = "⭐⭐⭐⭐⭐",
}
export type Record = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Role = keyof typeof Roles;
export type Reaction = keyof typeof Reactions;
