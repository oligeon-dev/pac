/**
 * @property label log text
 * @property color color of the label
 * @property bgColor background color of the label
 * @property value value of the label
 * @cStyle cStyle style of the label
 * @type type log type
 */
type TCclg = {
    label: string;
    color?: string;
    bgColor?: string;
    value?: string | number | object | null | undefined;
    cStyle?: string;
    type?: "log" | "info" | "warn" | "error";
};
/**
 * custom console
 * @param args {@link TCclg}
 * @returns console medhod
 */
export declare const cclg: ({ label, color, bgColor, cStyle, value, type }: TCclg) => void;
export {};
