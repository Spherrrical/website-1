import Image from 'next/dist/client/future/image';
import { ReactNode } from 'react';
import Container from '../Utils/Container';
import Section from '../Utils/Section';

const NavWrapper = (props: { label: string, children: ReactNode }) => (
    <div className="grid">
        <p className="text-dark/75">{props.label}</p>
        <ul>
            {props.children}
        </ul>
    </div>
);

const NavItem = (props: {label: string, href: string}) => (
    <li>
        <a href={props.href}>
            <p>{props.label}</p>
        </a>
    </li>
);

const Footer = () => (
    <footer>
        <Section>
            <Container className="gap-y-8" display="grid">
                <Image src="/svg/tail/tail.svg" alt="FlyByWire Simulations Logo" width={40} height={40} />

                <div className="text-dark">
                    <h4>Contact Us</h4>
                    <p className="font-semibold">contact@flybywiresim.com</p>
                    <div className="text-md grid gap-y-2 py-4">
                        <span className="grid grid-cols-3">
                            <a href="https://github.com/flybywiresim/manuals/blob/master/pdf/FBW%20Terms%20of%20Services.pdf" target="_blank" rel="noreferrer">Terms of Use</a>
                            <a href="https://github.com/flybywiresim/manuals/blob/master/pdf/FBW%20Privacy%20Policy.pdf" target="_blank" rel="noreferrer">Privacy Policy</a>
                            <a href="https://github.com/flybywiresim/" target="_blank" rel="noreferrer">Source Code</a>
                        </span>
                        <small className="text-dark/50">
                            &copy; FlyByWire Simulations and its contributors 2020-
                            {new Date().getFullYear()}
                        </small>

                        <div className="grid grid-cols-3 items-start gap-y-5 py-8">
                            <NavWrapper label="Projects">
                                <NavItem label="Installer" href="/" />
                                <NavItem label="A32NX" href="/" />
                                <NavItem label="A380X" href="/" />
                                <NavItem label="EFB" href="/" />
                            </NavWrapper>

                            <NavWrapper label="Menu">
                                <NavItem label="NOTAMs" href="/" />
                                <NavItem label="Projects" href="/" />
                                <NavItem label="Docs" href="/" />
                                <NavItem label="Map" href="/" />
                            </NavWrapper>

                            <NavWrapper label="Socials">
                                <NavItem label="Discord" href="/" />
                                <NavItem label="Twitter" href="/" />
                                <NavItem label="Facebook" href="/" />
                                <NavItem label="YouTube" href="/" />
                                <NavItem label="Twitch" href="/" />
                            </NavWrapper>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    </footer>
);

export default Footer;