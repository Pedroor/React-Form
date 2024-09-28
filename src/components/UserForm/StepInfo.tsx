interface IStepInfoProps {
  step: number;
}
function StepInfo({ step }: IStepInfoProps) {
  return (
    <div className="text-sm text-gray-500">
      Etapa <span className="text-orange-500 font-bold">{step.toString()}</span>{" "}
      de 4
    </div>
  );
}

export default StepInfo;
