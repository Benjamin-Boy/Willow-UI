import { Button, Spinner } from "@willow/ui";

export const loadingButtonSource = `<Button variant="outlined" loader={<Spinner />} />
<Button variant="contained" label="Contained" loader={<Spinner />} />
<Button variant="outlined" label="Outlined" loader={<Spinner />} />
<Button variant="text" label="Text" loader={<Spinner />} />
`

export default function LoadingButton() {
    return (
        <div className="flex gap-5 items-center">
            <Button variant="outlined" loader={<Spinner />} />
            <Button variant="contained" label="Contained" loader={<Spinner />} />
            <Button variant="outlined" label="Outlined" loader={<Spinner />} />
            <Button variant="text" label="Text" loader={<Spinner />} />
        </div>
    )
}