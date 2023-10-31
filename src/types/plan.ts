interface MainGoal {
  main: string;
  main_id: number;
}

interface SmallGoal {
  small_goal: string;
  mini: string[];
}

export interface SmallPlan {
  Detail1: string;
  Detail2: string;
  Detail3: string;
  Detail4: string;
  Value: string;
}

export interface PlanType {
  MainKeyword: SmallPlan;
  MainKeyword2: SmallPlan;
  MainKeyword3: SmallPlan;
  MainKeyword4: SmallPlan;
}

export type GoalType = MainGoal | SmallGoal;
