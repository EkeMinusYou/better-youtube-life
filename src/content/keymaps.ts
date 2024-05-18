export const moving = {
  Left: "h",
  Down: "j",
  Up: "k",
  Right: "l",
} as const;
export const movingKeys: string[] = Object.values(moving);
