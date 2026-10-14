import { Button, ButtonGroup, TestIcon } from "@willow/ui";

export const buttonsInGroupSource = `<ButtonGroup border="border border-blue-600">
    <Button variant="outlined" label="Button 1" />
    <Button variant="contained" label="Button 2" />
    <Button variant="contained" label="Button 3" />
</ButtonGroup>
`

export default function ButtonsInGroup() {
    return (
        <ButtonGroup border="border border-blue-600">
            <Button variant="outlined" label="Button 1" rounded={"rounded-l"} icon={<TestIcon />} />
            <Button variant="contained" label="Button 2" rounded={"rounded-none"} />
            <Button variant="contained" label="Button 3" rounded={"rounded-r"} />
        </ButtonGroup>
    )
}