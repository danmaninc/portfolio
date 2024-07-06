interface MarkProps {
  children: React.ReactNode;
}
export function TextMark({ children }: MarkProps) {
  return (
    <mark className="bg-[#444444] text-white/75 py-[0.1rem] px-[0.3rem] rounded-lg">
      {children}
    </mark>
  );
}
