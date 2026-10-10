type Step = {
  number: string;
  title: string;
  body: string;
};

export function BuySteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="steps">
      {steps.map((step) => (
        <li className="step-card lift" key={step.number}>
          <p className="step-num">{step.number}</p>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
