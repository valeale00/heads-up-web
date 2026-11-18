export type Team = { id: string; name: string; players: string[]; score: number };
export type Phase = 'home' | 'setup' | 'prep' | 'playing' | 'turn-result' | 'scoreboard' | 'final';
export type Match = { teams: Team[]; categories: string[]; duration: number; rounds: number; round: number; turn: number; phase: Phase; used: string[]; deck: string[]; word: string; hits: number; passes: number; turnStart: number | null; turnEnd: number | null; prepStart: number | null; turnStats: {hits:number;passes:number}[]; sensor: boolean };
