import { PlanLayout } from '@components/plan/PlanLayout';

interface PlanProps {
  content: {
    id: number;
    plan: string;
  };
}
export const Plan = ({ content }: PlanProps) => {
  return (
    <div>
      <PlanLayout />
    </div>
  );
};
