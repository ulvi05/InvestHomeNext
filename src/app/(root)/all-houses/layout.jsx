import { LangProvider } from "@/context/LangContext";
import Category from "../home/Category";
import { Slider } from "../home/Slider";
import BeAgent from "../home/BeAgent";
import ScrollToTop from "@/components/core/ScrollToTop";

export default function Layout({ children }) {
    return (
        <LangProvider>
            <main>
                <ScrollToTop />
                <Slider />
                <Category />
                {children}
                <BeAgent />
            </main>
        </LangProvider >
    )
}