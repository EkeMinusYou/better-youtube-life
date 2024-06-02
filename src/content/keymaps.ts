type Command = {
  Modifier: {
    Ctrl: boolean;
    Shift: boolean;
    Alt: boolean;
    Meta: boolean;
  };
  Command: {
    [key: string]: string[];
  };
};

export const HomeCommand: Command = {
  Modifier: {
    Ctrl: true,
    Shift: false,
    Alt: false,
    Meta: false,
  },
  Command: {
    Left: ["h"],
    Down: ["j"],
    Up: ["k"],
    Right: ["l"],
    Click: ["Enter"],
    Exit: ["Escape"],
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

export const WatchCommand: Command = {
  Modifier: {
    Ctrl: true,
    Shift: false,
    Alt: false,
    Meta: false,
  },
  Command: {
    Go: ["d"],
    Back: ["s"],
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
