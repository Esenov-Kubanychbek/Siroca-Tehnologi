export interface IButton {
    type?:"submit" | "reset" | "button" | undefined;
    name?:string;
    variant: string;
    width: number;
    text: string;
    height?: number;
    onClick?: ()=> void;
}
