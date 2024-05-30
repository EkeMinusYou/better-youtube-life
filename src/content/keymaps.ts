export const moving = {
  Modifier: {
    ctrlKey: true,
    shiftKey: false,
    altKey: false,
    metaKey: false,
  },
  Command: {
    Left: "h",
    Down: "j",
    Up: "k",
    Right: "l",
  },
} as const;

export const modifierKeyDown = (event: KeyboardEvent): boolean => {
  return (
    event.ctrlKey == moving.Modifier.ctrlKey &&
    event.shiftKey == moving.Modifier.shiftKey &&
    event.altKey == moving.Modifier.altKey &&
    event.metaKey == moving.Modifier.metaKey
  );
};
