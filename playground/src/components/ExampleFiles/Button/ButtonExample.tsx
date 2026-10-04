import { Button } from "@willow/ui";

const buttonProps = {
    label: {
        type: "string",
        value: "N/A",
        default: "Click Me",
    },
    variant: {
        type: "string",
        value: "contained | outlined | text",
        default: "contained",
    },
    disabled: {
        type: "boolean",
        value: "true | false",
        default: "false",
    },
    animationSpeed: {
        type: "string",
        value: "slow | medium | fast",
        default: "medium",
    },
    icon: {
        type: "React.ReactNode",
        value: "N/A",
        default: "N/A",
    },
    startIcon: {
        type: "React.ReactNode",
        value: "N/A",
        default: "N/A",
    },
    endIcon: {
        type: "React.ReactNode",
        value: "N/A",
        default: "N/A",
    },
}

export function ButtonProps() {
    return (
        <div className="overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-md border border-zinc-800">
            <table className="w-full text-left">
                <thead className="border-b border-zinc-800 font-bold">
                    <tr className="select-none bg-zinc-700">
                        <th className="p-2">Prop</th>
                        <th className="p-2">Type</th>
                        <th className="p-2">Value</th>
                        <th className="p-2">Default</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {
                        Object.entries(buttonProps).map(([key, values]) => {
                            return (
                                <tr className="odd:bg-zinc-950 even:bg-zinc-900 last:border-0 border-b border-zinc-800 hover:bg-zinc-700 transition-all duration-200 cursor-default select-none">
                                    <td className="p-2">{key}</td>
                                    <td className="p-2">{values.type}</td>
                                    <td className="p-2">{values.value}</td>
                                    <td className="p-2">{values.default}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export const buttonSource = `<Button variant="contained" label="Contained" />
<Button variant="outlined" label="Outlined" />
<Button variant="text" label="Text" />
`
export default function ButtonExample() {
    return <div className="flex gap-5 items-center">
        <Button variant="contained" label="Contained" />
        <Button variant="outlined" label="Outlined" />
        <Button variant="text" label="Text" />
    </div>
}