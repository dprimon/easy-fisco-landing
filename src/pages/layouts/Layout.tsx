import Navbar from "../components/navbar/Navbar"
import AppFooter from "../components/footer/footer"
import {ReactNode} from "react"

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <>
        <Navbar />
        { children }
        <AppFooter />
      </>
    )
}

export default Layout;
