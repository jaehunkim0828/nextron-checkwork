export type ButtonT = { name: string, style: object | undefined, type: "button" | "submit" | "reset" | undefined};

export type InputT = { value: string, onChange: any, placeholder: string, style: object | undefined };

export type TimerT = 'Start' | 'Stop';

export type TimeT = NodeJS.Timeout | undefined;