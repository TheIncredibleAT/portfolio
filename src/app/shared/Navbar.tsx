import Link from "next/link";
import Image from 'next/image';
import pfpic from '../assets/images/pfpic.jpg';
import mountains from '../assets/images/server-banner.jpg';

export default function NavBar() {
    return(
        <div className="banner flex">
            <Image
                alt="Mountains"
                src={mountains}
                fill
                sizes="100vw"
                className="-z-10"
                style={{
                    objectFit: "none",
                }}
            />
            <div className="pfpic">
                <Image
                    src={pfpic}
                    width={300}
                    height={300}
                    alt="Profile Picture"
                    className="rounded-full"
                />
            </div>
            <div className="navbar-container">
                <div className="navbar flex">
                    <div className="navlink-container flex">
                        <Link href="/">
                            <div className="navbar-links">
                                Home
                            </div>
                        </Link>
                        <Link href="/pages/resume">
                            <div className="navbar-links">
                                Resume
                            </div>
                        </Link>
                        <Link href="/pages/contactInfo">
                            <div className="navbar-links">
                                Contact Info
                            </div>
                        </Link>
                        <Link href="/pages/updates">
                            <div className="navbar-links">
                                Updates
                            </div>
                        </Link>
                        <Link href="/pages/blog">
                            <div className="navbar-links">
                                Blog
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}