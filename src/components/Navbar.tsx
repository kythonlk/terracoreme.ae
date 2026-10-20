import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo-c.webp';

const serviceLinks = [['Soil Improvement','soil'],['Piling','piling'],['Shoring','shoring'],['NDM / NDRC','ndrc'],['Dewatering','dewatering'],['Logistics','logistics']];
export default function Navbar() {
  const [open,setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const {pathname} = useLocation();
  const overlay = pathname === '/' || pathname === '/about' || pathname.startsWith('/services');
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>60);onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll);},[]);
  return <header className={`site-header ${overlay ? "over-hero" : "solid-header"} ${scrolled ? "scrolled" : ""}`}><div className="nav-wrap">
    <Link className="brand" to="/" onClick={()=>setOpen(false)}><img src={logo} alt=""/><span>TerraCore<small>GROUND ENGINEERING SOLUTIONS</small></span></Link>
    <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-navigation" onClick={()=>setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav id="primary-navigation" className={open ? 'primary-nav is-open' : 'primary-nav'} aria-label="Main navigation">
      <NavLink to="/" onClick={()=>setOpen(false)}>Home</NavLink><NavLink to="/about" onClick={()=>setOpen(false)}>About us</NavLink>
      <div className="nav-services"><NavLink to="/services" onClick={()=>setOpen(false)}>Services</NavLink><details><summary aria-label="Explore service pages"><ChevronDown size={15}/></summary><div className="nav-dropdown">{serviceLinks.map(([label,path])=><Link key={path} to={'/services/'+path} onClick={e=>{setOpen(false);e.currentTarget.closest('details')?.removeAttribute('open');}}>{label}<ArrowUpRight size={15}/></Link>)}</div></details></div>
      <NavLink to="/work-with-us" onClick={()=>setOpen(false)}>Careers</NavLink><NavLink to="/contact" onClick={()=>setOpen(false)}>Contact</NavLink>
    </nav></div></header>;
}
