import { Button, TrashStroke } from "@willow/ui";

export const iconButtonSource = `<Button variant="icon" icon={TrashStroke} iconClassName="cursor-pointer hover:stroke-primary" />
`

export default function ButtonIcon() {
    return (
        <Button variant="icon" icon={TrashStroke} iconClassName="cursor-pointer hover:stroke-primary" />
    )
}