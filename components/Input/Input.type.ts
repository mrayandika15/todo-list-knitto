export type IInput = {
  variants: "base" | "select";
  options?: string[];
  label: string;
  onChange: (event: any) => void;
};
