import Image from "next/image";

const AppHeader: React.FC = () => {
   return (
     <header className="header">
       <div className="container">
         <div className="row align-items-center">
           <div className="col-lg-6">
             <div className="text-container mt-5">
               <h1 className="large">
                 La moneta pi&ugrave; importante che abbiamo 
                 <span> &egrave; il tempo</span> 
               </h1>
               <p className="large">
                 EasyFisco gestisce i clienti e la fiscalit&agrave; per te, per darti modo di dedicare il tuo tempo alle cose più importanti 
               </p>
               <button className="btn-solid-lg">Dimmi di pi&ugrave;</button>
             </div>
           </div>
           <div className="col-lg-6">
              <Image
                className="img-fluid"
                src="/images/header.svg" 
                width={400}
                height={500}
                layout="responsive"
                alt="Imagine del tempo (header)"
                priority
              />
           </div>
         </div>
       </div>
     </header>
   )
}

export default AppHeader;
