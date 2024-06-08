type Modifier = {
  Ctrl: boolean;
  Shift: boolean;
  Alt: boolean;
  Meta: boolean;
};

export const buildModifer = (event: KeyboardEvent, modifier: Modifier) => {
  return (
    event.ctrlKey === modifier.Ctrl &&
    event.shiftKey === modifier.Shift &&
    event.altKey === modifier.Alt &&
    event.metaKey === modifier.Meta
  );
};

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

export const GlobalCommand = {
  Modifier: {
    Ctrl: true,
    Shift: false,
    Alt: false,
    Meta: false,
  },
  Command: {
    y: "GoToHome",
  },
} as const;
