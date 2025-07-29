import { LangProvider } from "@/context/LangContext";
import CenterMode from "../Home/CenterMode";
import { Slider } from "../Home/Slider";
import BeAgent from "../Home/BeAgent";
import ScrollToTop from "@/components/core/ScrollToTop";

export default function Layout({ children }) {
    return (
        <LangProvider>
            <main>
                <ScrollToTop />
                <Slider />
                <CenterMode />
                {children}
                <BeAgent />
            </main>
        </LangProvider >
    )
}