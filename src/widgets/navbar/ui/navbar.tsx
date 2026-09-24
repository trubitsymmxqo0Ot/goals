import { Profile } from "@/features/profile"
import { Theme } from "@/shared/ui/theme/theme"

export const Navbar = () => {
    return (
        <header className="bg-secondary h-navbar px-4 gap-12 flex items-center justify-end">
            <Profile/>
            <Theme />
        </header>
    )
}