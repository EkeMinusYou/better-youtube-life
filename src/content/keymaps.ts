export const GridCommand = {
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
    Click: "Enter",
  },
} as const;

export const modifierKeyDown = (event: KeyboardEvent): boolean => {
  return (
    event.ctrlKey == GridCommand.Modifier.ctrlKey &&
    event.shiftKey == GridCommand.Modifier.shiftKey &&
    event.altKey == GridCommand.Modifier.altKey &&
    event.metaKey == GridCommand.Modifier.metaKey
  );
};
