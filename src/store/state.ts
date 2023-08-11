export type InputField = {
    value: string;
};

export type State = {
    loading: boolean;
    fields: InputField[];
};

export const state: State = {
    loading: false,
    fields: [{ value: "ss" }, { value: "ssss" }],
};
