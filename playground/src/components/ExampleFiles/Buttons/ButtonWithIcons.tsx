import { Button, TestIcon } from "@willow/ui";

export const buttonWithIconsSource = `<Button variant="contained" label="Contained" icon={<TestIcon />} />
<Button variant="outlined" label="Outlined" startIcon={<TestIcon />} />
<Button variant="text" label="Text" endIcon={<TestIcon />} />
`

export default function ButtonWithIcons() {
    return <div className="flex gap-5 items-center">
        <Button variant="contained" label="Contained" icon={<TestIcon />} />
        <Button variant="outlined" label="Outlined" startIcon={<TestIcon />} />
        <Button variant="text" label="Text" endIcon={<TestIcon />} />
    </div>
}