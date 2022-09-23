import { ReactNode } from 'react';

type SectionProps = {
    id?: string
    theme?: 'light' | 'dark';
    className?: string
    children?: ReactNode
}
const Section = ({ id, theme, className, children }: SectionProps) => {
    const handleTheme = () => {
        switch (theme) {
        case 'light':
            return 'bg-light text-dark';
        case 'dark':
            return 'bg-dark text-light bg-gradient-to-r from-transparent to-secondary-accent/50';
        default:
            return 'text-light';
        }
    };
    return (
        <section id={id} className={`py-20 ${handleTheme()} ${className}`}>
            {children}
        </section>
    );
};

export default Section;
