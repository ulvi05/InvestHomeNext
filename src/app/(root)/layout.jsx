import Footer from "@/components/common/Footer/Footer";
import SubFooter from "@/components/common/Footer/SubFooter";
import ContactHeader from "@/components/common/Header/ContactHeader";
import Header from "@/components/common/Header/Header";
import { LangProvider } from "@/context/LangContext";

export default function Layout({ children }) {
    return (
        <LangProvider>
            <main>
                <ContactHeader />
                <Header />
                {children}
                <Footer />
                <SubFooter />
            </main>
        </LangProvider >
    )
}