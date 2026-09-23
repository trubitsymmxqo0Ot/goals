import { Profile } from "@/features/profile"
import { Theme } from "@/shared/ui/theme/theme"

export const Navbar = () => {
    return (
        <header className="bg-secondary py-2 px-4 flex justify-end">
            <Profile/>
            <Theme />
        </header>
    )
}