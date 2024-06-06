import Link from "next/link";

const AppFooter: React.FC = () => {
   return (
     <footer className="footer">
       <div className="container">
         <div className="row">
           <div className="col-lg-12">
             <div className="footer-col first">
               <h3>EasyFisco</h3>
               <p>Inizia da subito a risparmiare sul tuo tempo.</p>
             </div>
             <div className="footer-col second">
               <h3>Link utili</h3>
               <ul>
                 <li>Importanti: Termini e Condizioni, Privacy Policy</li>
                 <li>Guide: Regime dei minimi, Cos'&egrave; una Partita IVA, Fatturazione Elettronica</li>
                 <li>Supporto: <Link href="/contact">Contattaci</Link></li>
               </ul>
             </div>
             <div className="footer-col third">
                <span className="fa-stack">
                   <a href="#">
                     <i className="fas fa-circle fa-stack-2x"></i>
                     <i className="fab fa-facebook-f fa-stack-1x"></i>
                   </a>
                </span>
                <span className="fa-stack">
                   <a href="#">
                     <i className="fas fa-circle fa-stack-2x"></i>
                     <i className="fab fa-twitter fa-stack-1x"></i>
                   </a>
                </span>
                <span className="fa-stack">
                   <a href="#">
                     <i className="fas fa-circle fa-stack-2x"></i>
                     <i className="fab fa-pinterest fa-stack-1x"></i>
                   </a>
                </span>
                <span className="fa-stack">
                   <a href="#">
                     <i className="fas fa-circle fa-stack-2x"></i>
                     <i className="fab fa-instagram fa-stack-1x"></i>
                   </a>
                </span>
             </div>
           </div>
         </div>
       </div>
     </footer>
   )
}

export default AppFooter;
