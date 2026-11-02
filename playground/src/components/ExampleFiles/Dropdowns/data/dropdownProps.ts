export const dropdownProps = {
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

