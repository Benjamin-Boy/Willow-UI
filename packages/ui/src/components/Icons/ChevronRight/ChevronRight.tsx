import IconWrapper from "../Icon/IconWrapper";

export default function ChevronRight(props: React.ComponentProps<typeof IconWrapper>) {
    return (
        <IconWrapper {...props}>
            <path d="M9 6l6 6l-6 6" />
        </IconWrapper>
    )
}