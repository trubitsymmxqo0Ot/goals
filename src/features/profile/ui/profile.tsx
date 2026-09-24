'use client';
import { Icon } from "@/shared/assets"
import Drawer from "@/shared/ui/dropdown/dropdown"
import { paths } from "./model/paths"

export const Profile = () => {
    return (
        <div>
            <Drawer>
                <Drawer.Trigger>
                    <Icon name='user' className="size-6" />
                </Drawer.Trigger>
                <Drawer.Content offsetToParent={16} isBorder={false} variant="inverted">
                    {paths.map(path => (
                        <Drawer.Item href={path.href} key={path.title}>{path.title}</Drawer.Item>
                    ))}
                </Drawer.Content>
            </Drawer>
        </div>
    )
}