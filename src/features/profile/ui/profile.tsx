'use client';
import { Icon } from "@/shared/assets"
import { paths } from "./model/paths"
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from "@/shared/ui/dropdown/dropdown";
import { useAuth } from "@/shared/providers/auth-provider";
import { Button } from "@/shared/ui/button/button";

export const Profile = () => {
    const { isAuth } = useAuth();
    return (
        <div>
            {isAuth ? (
                <Dropdown>
                    <DropdownTrigger>
                        <Icon name='user' className="size-6" />
                    </DropdownTrigger>
                    <DropdownContent offsetToParent={16} isBorder={false} variant="inverted">
                        {paths.map(path => (
                            <DropdownItem href={path.href} key={path.title}>{path.title}</DropdownItem>
                        ))}
                    </DropdownContent>
                </Dropdown>

            ) : (
                <div className="flex gap-4">
                    <Button variant="ghost" className="bg-color-tertiary/60 hover:bg-color-tertiary/40 transition-colors py-2 px-3">Войти</Button>
                    <Button variant="ghost" className="bg-color-tertiary/60 hover:bg-color-tertiary/40 transition-colors py-2 px-3">Регистрация</Button>
                </div>
            )}
        </div>
    )
}