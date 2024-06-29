import './mark.module.css'
interface MarkProps {
    children: React.ReactNode;
}
export function TextMark({ children }: MarkProps) {
    return <mark>{children}</mark>
}