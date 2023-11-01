export interface PlanList {
  datetime: string;
  main: string;
  main_id: number;
  small1: string;
  small2: string;
  small3: string;
  small4: string;
  total: number;
}

export interface SmallGoal {
  small_goal: string;
  mini1: string;
  mini2: string;
  mini3: string;
  mini4: string;
  cmini1: number;
  cmini2: number;
  cmini3: number;
  cmini4: number;
  total: number;
  date: string;
}

export interface PlanDetail {
  result: SmallGoal[];
  score: number;
}

export interface PlanEdit {
  small_goal: string;
  mini_num: number;
  value: string;
}
