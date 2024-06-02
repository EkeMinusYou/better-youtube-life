export const HomeCommand = {
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
    Exit: "Escape",
  },
} as const;

export const modifierKeyDown = (event: KeyboardEvent): boolean => {
  return (
    event.ctrlKey == HomeCommand.Modifier.ctrlKey &&
    event.shiftKey == HomeCommand.Modifier.shiftKey &&
    event.altKey == HomeCommand.Modifier.altKey &&
    event.metaKey == HomeCommand.Modifier.metaKey
  );
};
