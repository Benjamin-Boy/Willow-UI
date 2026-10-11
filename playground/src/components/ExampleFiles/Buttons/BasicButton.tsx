import { Button } from "@willow/ui";

export const basicButtonSource = `<Button variant="contained" label="Contained" />
<Button variant="outlined" label="Outlined" />
<Button variant="text" label="Text" />
`

export default function BasicButton() {
    return <div className="flex gap-5 items-center">
        <Button variant="contained" label="Contained" />
        <Button variant="outlined" label="Outlined" />
        <Button variant="text" label="Text" />
    </div>
}