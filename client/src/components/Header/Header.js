import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useCartContext } from '../../contexts/CartContext';
import { CirclesThreePlus, Meteor, User, CalendarHeart, ClockCounterClockwise, GearSix, SignOut, ShoppingCartSimple, List } from "@phosphor-icons/react";
import { Link, NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Header.css';

const Header = () => {
    const { isLoggedIn, userName, logout } = useContext(AuthContext);
    const { products } = useCartContext();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const headerTop = document.querySelector('.header-top');
            const headerAll = document.querySelector('.header-all');
            const isScrolled = window.scrollY > 40;

            headerAll.classList.toggle('fixed', isScrolled);
            headerTop.classList.toggle('fixed', isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdown = () => setDropdownOpen(prev => !prev);
    const toggleCart = () => setCartOpen(prev => !prev);
    const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
    const handleLogout = () => {
        logout();
        setDropdownOpen(false); 
        setCartOpen(false);
    };

    const totalItems = products.reduce((acc, product) => acc + product.cantidad, 0);

    return (
        <div className="header-all">
            <div className="header-top">
                <p>¡Bienvenid@ a <b>Flash Store</b> 🖐!</p>
                <ul>
                    <li>
                        <a href="https://wa.link/z9fg3q" target='_blank' rel='noreferrer'>
                            <i className="fa-solid fa-store"></i> Delivery 983 744 910
                        </a>
                    </li>
                    <li>
                        <Link to="/local">
                            <i className="fa-solid fa-location-dot"></i> Nuestras Tiendas
                        </Link>
                    </li>
                </ul>
            </div>
            <header>
                <div className="header-main">
                    <h1>
                        <Link className='imgLogo' to='/home'>
                            <img src='/FlashStore_banner.webp' alt="Logo" />
                        </Link>
                    </h1>
                    <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                        <List size={28} color='#007bff' />
                    </button>
                    <section className={`tools-bar mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                        <nav>
                            <li>
                                <NavLink to="/catalogo" >
                                    <Meteor size={20} color='#007bff' weight='bold' />
                                    Explorar
                                </NavLink>
                            </li>
                            <li><NavLink to="/categorias" >
                                <CirclesThreePlus size={20} color='#007bff' weight='bold' />
                                Categorías
                            </NavLink></li>
                        </nav>
                        <form action="#" method="get">
                            <div className="search-container">
                                <input placeholder="Buscar" className="search-input" name="search" type="search" />
                                <svg className="search-icon" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21l-5.197-5.197A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" strokeLinejoin="round" strokeLinecap="round"></path>
                                </svg>
                            </div>
                        </form>
                    </section>
                    <section className='user-bar'>
                        <div className="user-menu">
                            {isLoggedIn ? (
                                <div className="actions-container">
                                    <button className="user-icon" onClick={toggleDropdown}>
                                        <User size={28} weight='bold' /><p>¡Bienvenido <br></br><b>{userName}</b>!</p>
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="actions">
                                            <Link to="/favoritos" className="action-item">
                                                <CalendarHeart size={20} /> Favoritos
                                            </Link>
                                            <Link to="/historial" className="action-item">
                                                <ClockCounterClockwise size={20} />Historial de compras
                                            </Link>
                                            <Link to="/settings" className="action-item">
                                                <GearSix size={20} /> Configuración
                                            </Link>
                                            <button className="action-item close-logout" onClick={handleLogout}>
                                                <SignOut size={20} /> Cerrar Sesión
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link to="/login" className="login-button">
                                    <User size={22} weight='bold' /> Iniciar Sesión
                                </Link>
                            )}
                        </div>
                        <div className="cart-menu">
                            <button className="cart-icon" onClick={toggleCart}>
                            <ShoppingCartSimple size={22} weight='bold' />{totalItems}
                            </button>
                            {isCartOpen && (
                                <div className="cart-dropdown">
                                    <Cart />
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </header>
        </div>
    );
}

export default Header;
