interface Props {
    label: string;
}

export default function Button(props: Props) {
    return (
        <button className="rounded-md cursor-pointer bg-blue-600 px-4 py-2 text-white">
            {props.label}
        </button>
    );
}
