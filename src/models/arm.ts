export type MovementArm = {
  elbow: Elbow,
  pulse: Pulse,
  movePulse: boolean
}

export type Elbow = {
  id: number,
  value: string,
}

export type Pulse = {
  id: number,
  value: string,
}

export const elbowValue: Elbow[] = [
  {
    id: 1,
    value: "Em Repouso"
  },
  {
    id: 2,
    value: "Levemente Contraído"
  },
  {
    id: 3,
    value: "Contraído"
  },
  {
    id: 4,
    value: "Fortemente Contraído"
  },
];

export const pulseValue: Pulse[] = [
  {
    id: 1,
    value: "Rotação para -90°"
  },
  {
    id: 2,
    value: "Rotação para -45°"
  },
  {
    id: 3,
    value: "Em Repouso"
  },
  {
    id: 4,
    value: "Rotação para 45°"
  },
  {
    id: 5,
    value: "Rotação para 90°"
  },
  {
    id: 6,
    value: "Rotação para 135°"
  },
  {
    id: 7,
    value: "Rotação para 180°"
  },
];