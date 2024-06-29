import './contacts.css';
interface ContactProps {
    id: string;
    link: string;
    icon: string;
}
export function Contact({ id, link, icon }: ContactProps) {
    return <a className="contact" id={id} href={link}><i
        className={icon}></i></a>
}