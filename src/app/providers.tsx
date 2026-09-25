import { ThemeProvider } from "@/shared/ui/theme/providers/theme-provider";
import { Navbar } from "@/widgets/navbar";
import { ReactNode } from "react"

interface ProvidersProps {
    children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <ThemeProvider>
            <Navbar />
            <main className="py-5 px-6">
                {children}
            </main>
        </ThemeProvider>
    )
}