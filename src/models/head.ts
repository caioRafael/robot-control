export type MovementHead = {
  inclination: Inclination,
  rotation: Rotation,
  rotateHead: boolean
}

export type Inclination = {
  id: number,
  value: string;
}

export type Rotation = {
  id: number,
  value: string;
}

export const headInclinationValues: Inclination[] = [
  {
    id: 1,
    value: "Para Cima"
  },
  {
    id: 2,
    value: "Em Repouso"
  },
  {
    id: 3,
    value: "Para Baixo"
  },
]

export const headRotationValues: Rotation[] = [
  {
    id: 1,
    value: "Rotação -90°"
  },
  {
    id: 2,
    value: "Rotação -45°"
  },
  {
    id: 3,
    value: "Em Repouso"
  },
  {
    id: 4,
    value: "Rotação 45°"
  },
  {
    id: 5,
    value: "Rotação 90°"
  },
]