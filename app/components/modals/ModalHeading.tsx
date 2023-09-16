interface ModalHeadingProps {
  title: string;
  subtitle: string;
}

export function ModalHeading({ title, subtitle }: ModalHeadingProps) {
  return (
    <div>
      <div className="text-xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-1">{subtitle}</div>
    </div>
  );
}
