import { LangProvider } from "@/context/LangContext";
import Category from "../Home/Category";
import { Slider } from "../Home/Slider";
import BeAgent from "../Home/BeAgent";
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