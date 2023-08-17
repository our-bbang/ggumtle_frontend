import { PlanLayout } from '@components/plan/PlanLayout';
import { useEffect } from 'react';

interface PlanProps {
  content: {
    id: number;
    plan: string;
  };
}
export const Plan = ({ content }: PlanProps) => {
  useEffect(() => {
    console.log(content);
  }, []);
  return (
    <div>
      <PlanLayout />
    </div>
  );
};
