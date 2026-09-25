'use client';
import { Icon } from "@/shared/assets"
import { paths } from "./model/paths"
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from "@/shared/ui/dropdown/dropdown";

export const Profile = () => {
    return (
        <div>
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
        </div>
    )
}