interface Props {
    code: string;
}

export default function CodeBlock(props: Props) {

    return (
        <div className="bg-zinc-900 flex items-center justify-start rounded-b-lg border border-zinc-800 p-4">
            <pre>
                <code>{props.code}</code>
            </pre>
        </div>
    )
}