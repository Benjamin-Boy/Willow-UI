import Icon from "../Icon/Icon";

export default function TestIcon(props: React.ComponentProps<typeof Icon>) {
    return <Icon {...props}>
        <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" />
        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" />
    </Icon>
}