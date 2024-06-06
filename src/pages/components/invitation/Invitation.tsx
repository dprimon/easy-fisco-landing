import Link from "next/link";

const Invitation: React.FC = () => {
  return (
    <div className="basic-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3>EasyFisco cambia il modo di pensare ai CRM e alla fiscalità grazie a soluzioni moderne, intuitive e flessibili.</h3>
            <Link href="/contact" className="btn-outline-lg page-scroll">Contattaci</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Invitation;
