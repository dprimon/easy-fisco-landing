import Link from "next/link";
import Image from "next/image";
import { Price } from "@/types";
import {title} from "process";

interface PricingProps {
  items: Price[];
}

const Pricing: React.FC<PricingProps> = ({ items }) => {
  return (
    <div id="price" className="cards-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="heading">Un piano per ogni esigenza</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {
              items && items.map((item: Price) => {
                return (
                  <div className="card" key={item.id.toString()}>
                    <div className="card-body">
                      <div className="card-title">
                         <Image className="decoration-lines" src="/images/decoration-lines.svg" alt="alternative" width={30} height={10} />
                         <span>{item.name}</span>
                         <Image className="decoration-lines flipped" src="/images/decoration-lines.svg" alt="alternative" width={30} height={10} />
                      </div>
                      { item.features && <ul className="list-unstyled li-space-lg">
                        {
                          item.features.map((feature: string, index: number) => {
                            return (
                              <li key={`feature-${index}`} dangerouslySetInnerHTML={{__html: feature}}></li>
                            );
                          })
                        }
                      </ul>
                      }
                      <div className="price">{item.value}<span>/anno</span></div>
                      <Link href="/contact" className="btn-solid-reg">Contattaci</Link>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing;
