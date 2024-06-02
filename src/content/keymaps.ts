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

export const homeModifier = (event: KeyboardEvent): boolean => {
  return (
    event.ctrlKey == HomeCommand.Modifier.ctrlKey &&
    event.shiftKey == HomeCommand.Modifier.shiftKey &&
    event.altKey == HomeCommand.Modifier.altKey &&
    event.metaKey == HomeCommand.Modifier.metaKey
  );
};

export const WatchCommand = {
  Modifier: {
    ctrlKey: true,
    shiftKey: false,
    altKey: false,
    metaKey: false,
  },
  Command: {
    Go: "d",
    Back: "s",
  },
} as const;

export const watchModifier = (event: KeyboardEvent): boolean => {
  return (
    event.ctrlKey == WatchCommand.Modifier.ctrlKey &&
    event.shiftKey == WatchCommand.Modifier.shiftKey &&
    event.altKey == WatchCommand.Modifier.altKey &&
    event.metaKey == WatchCommand.Modifier.metaKey
  );
};
