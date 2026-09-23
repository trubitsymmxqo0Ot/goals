'use client';
import { Icon } from "@/shared/assets"
import Drawer from "@/shared/ui/drawer/drawer"
import { paths } from "./model/paths"

export const Profile = () => {
    return (
        <div className="relative">
            <Drawer>
                <Drawer.Trigger>
                    <Icon name='user' className="size-6" />
                </Drawer.Trigger>
                <Drawer.Content>
                    {paths.map(path => (
                        <Drawer.Item key={path.title}>{path.title}</Drawer.Item>
                    ))}
                </Drawer.Content>
            </Drawer>
        </div>
    )
}