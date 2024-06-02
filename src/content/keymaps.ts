export const HomeCommand = {
  Modifier: {
    Ctrl: true,
    Shift: false,
    Alt: false,
    Meta: false,
  },
  Command: {
    h: "Left",
    j: "Down",
    k: "Up",
    l: "Right",
    Enter: "Click",
    Escape: "Exit",
  },
} as const;

export const homeModifier = (event: KeyboardEvent): boolean => {
  return (
    event.ctrlKey == HomeCommand.Modifier.Ctrl &&
    event.shiftKey == HomeCommand.Modifier.Shift &&
    event.altKey == HomeCommand.Modifier.Alt &&
    event.metaKey == HomeCommand.Modifier.Meta
  );
};

export const WatchCommand = {
  Modifier: {
    Ctrl: true,
    Shift: false,
    Alt: false,
    Meta: false,
  },
  Command: {
    d: "Go",
    s: "Back",
  },
} as const;

export const watchModifier = (event: KeyboardEvent): boolean => {
  return (
    event.ctrlKey == WatchCommand.Modifier.Ctrl &&
    event.shiftKey == WatchCommand.Modifier.Shift &&
    event.altKey == WatchCommand.Modifier.Alt &&
    event.metaKey == WatchCommand.Modifier.Meta
  );
};
