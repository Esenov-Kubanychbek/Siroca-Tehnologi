export interface IButton {
    type?: "submit" | "reset" | "button" | undefined;
    name?: string;
    variant: "Primary" | "Secondary" | "Without" | "ColorBlue" | "ColorRed";
    width: number;
    text: string;
    height?: number;
    onClick?: () => void;
}
