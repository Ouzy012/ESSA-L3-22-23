import { Link, NavLink } from "react-router-dom";
import './NavBar.css'
import { useState } from "react";

export default function NavBar() {

    const isActive = useState(false)

    return (
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid">
                <Link to={'/'}>ESSA</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to={'/'} className={`text-dark ${isActive ? 'active' : '' }`}>Accueil</Link>
                        </li>

                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to={'/essa'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Notre école
                            </Link>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to={'/essa'}>ESSA</Link></li>
                                <li><a class="dropdown-item" href="#">Pourquoi ESSA</a></li>
                                <li><Link class="dropdown-item" to={'/essa/professeur'}>Nos professeurs</Link></li>
                                <li><a class="dropdown-item" href="#">Témoignages</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link className={`text-dark ${isActive ? 'active' : '' }`} to={'/contact'}>Contact</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}