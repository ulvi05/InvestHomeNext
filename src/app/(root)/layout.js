import ContactHeader from "@/components/common/Header/ContactHeader";
import Header from "@/components/common/Header/Header";

export default function Layout({ children}) {
    return (
        <main>
            <ContactHeader />
            <Header />
            {children}
        </main>
    )
}