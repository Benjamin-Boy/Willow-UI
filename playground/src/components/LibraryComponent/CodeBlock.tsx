interface Props {
    code: string;
}

export default function CodeBlock(props: Props) {

    return (
        <div className="bg-zinc-900 flex items-center justify-start border-t border-zinc-800 p-4 text-xs">
            <pre>
                <code>{props.code}</code>
            </pre>
        </div>
    )
}