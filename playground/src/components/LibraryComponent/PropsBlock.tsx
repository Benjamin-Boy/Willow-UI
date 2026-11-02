interface Props {
    content: Record<string, Record<string, string>>;
}

export default function PropsBlock(props: Props) {
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
                        Object.entries(props.content).map(([key, values]) => {
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