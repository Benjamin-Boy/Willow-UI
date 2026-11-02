interface Props {
    title: string;
    description: string;
}

export default function HeaderBlock(props: Props) {

    return (
        <>
            <div className="text-4xl font-bold">{props.title}</div>
            <div>{props.description}</div>
        </>
    )
}