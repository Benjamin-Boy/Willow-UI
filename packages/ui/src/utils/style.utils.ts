export const computeStyles = (style: Record<string, string>) => {
    return `${Object.values(style).join(" ")}`
}