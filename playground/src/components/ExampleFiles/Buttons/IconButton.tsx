import { Button, TestIcon } from "@willow/ui";

export const iconButtonSource = `<Button variant="icon" label="Contained" icon={<TestIcon />} />
`

export default function IconButton() {
    return <div className="flex gap-5 items-center">
        <Button variant="icon" label="Contained" icon={<TestIcon color="#457864" />} />
    </div>
}