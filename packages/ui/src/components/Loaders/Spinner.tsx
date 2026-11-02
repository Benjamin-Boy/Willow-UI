
interface SpinnerProps {
    /**
     * Width and height of the spinner in pixels.
     * @default 20
     */
    size?: number;
    /**
     * Thickness of the spinner border in pixels.
     * @default 2
     */
    border?: number;
}

/**
 * 
 * @param {number} size
 * @param {number} border 
 * @description A customizable circular spinner 
 */
export default function Spinner(props: SpinnerProps) {
    const style = {
        width: props.size ?? 20,
        height: props.size ?? 20,
        borderWidth: props.border ?? 2,
    }

    return (
        <div className="animate-spin rounded-full border-2 border-zinc-200 border-t-blue-500" aria-label="Loading" style={style} />
    )
}