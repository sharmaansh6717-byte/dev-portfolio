import { Github, Linkedin, Mail } from 'lucide-react'
import { social } from '../../data/social'

export default function Footer() {
    return (
        <footer className="border-t border-border px-6 py-10 sm:px-10 lg:px-20">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-sm text-text-muted">
                    © {new Date().getFullYear()} {social.name}. Built with React &amp; Three.js.
                </p>

                <div className="flex items-center gap-4">
                    <a
                        href={`mailto:${social.email}`}
                        data-cursor="hover"
                        aria-label="Email"
                        className="text-text-muted hover:text-accent"
                    >
                        <Mail size={16} />
                    </a>
                    <a
                        href={social.github}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="hover"
                        aria-label="GitHub"
                        className="text-text-muted hover:text-accent"
                    >
                        <Github size={16} />
                    </a>

                    <a
                        href={social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="hover"
                        aria-label="LinkedIn"
                        className="text-text-muted hover:text-accent"
                    >
                        <Linkedin size={16} />
                    </a>
                </div>
            </div>
        </footer>
    )
}