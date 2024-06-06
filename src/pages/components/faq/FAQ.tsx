import {Question} from "@/types";
import {useState} from "react";

type FAQProps = {
  items: Question[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  //const [currentId, setCurrentId] = useState<string>(items[0].id);
  const [currentId, setCurrentId] = useState<string>('faq-1');

  function handleClick(id: string) {
    setCurrentId(id);
  }

  return (
     <div className="questions">
       <div className="container">
         <div className="row">
           <div className="col-lg-12">
             <h2 className="heading">Hai delle curiosit&agrave;?</h2>
           </div>
         </div>
         <div className="row">
           <div className="col-lg-12">
             <div id="my-accordion" className="accordion">
               {
                 items && items.map((item: Question) => {
                   const showClassName= item.id === currentId ? "show" : "";
                   return (
                     <div className="accordion-item" key={item.id}>
                       <h2 className="accordion-header">
                         <button 
                           className="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target={`#${item.id}`}
                           onClick={()=>handleClick(item.id)}
                           dangerouslySetInnerHTML={{ __html: item.title}}>
                         </button>
                       </h2>
                       <div
                         id={item.id}
                         className={`accordion-collapse collapse ${showClassName}`}
                         data-bs-parent="#my-accordion"
                       >
                         <div className="accordion-body" dangerouslySetInnerHTML={{ __html: item.answer}}></div>
                       </div>
                     </div>
                   );
                 })
               }
             </div>
           </div>
         </div>
       </div>
    </div>)
  
}

export default FAQ;
