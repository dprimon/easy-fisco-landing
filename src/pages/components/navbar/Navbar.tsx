import Link from "next/link"

const Navbar: React.FC = () => {
   return (
     <nav id="myNavbar" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
       <div className="container">
         <Link href="/" className="navbar-brand logo-text">EasyFisco</Link>
         <button className="navbar-toggler p-0 border-0" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div id="navbarMain" className="navbar-collapse offcanvas-collapse">
           <ul className="navbar-nav ms-auto navbar-nav-scroll">
             <li className="nav-item">
               <Link href="/" className="nav-link">Home</Link>
             </li>
             <li className="nav-item">
               <Link href="/#features" className="nav-link">Funzionalit&agrave;</Link>
             </li>
             <li className="nav-item">
               <Link href="/#details" className="nav-link">Dettagli</Link>
             </li>
             <li className="nav-item">
               <Link href="/#price" className="nav-link">Prezzi</Link>
             </li>
             <li className="nav-item">
               <Link href="/contact" className="nav-link">Contattaci</Link>
             </li>
           </ul>
           <span className="nav-item">
             <a href="#" className="btn-outline-sm">Accedi</a>
           </span>
         </div>
       </div>
     </nav>

   )


}

export default Navbar;
