interface PlanProps {
  content: {
    id: number;
    plan: string;
  };
}
export const Plan = ({ content }: PlanProps) => {
  return <div>계획표 {content.plan}</div>;
};
