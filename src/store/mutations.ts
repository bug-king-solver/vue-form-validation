import { MutationTree } from "vuex";
import { State, InputField } from "./state";

export enum MutationType {
    SetFields = "SET_FIELDS",
    AddField = "ADD_FIELD",
    RemoveField = "REMOVE_FIELD",
}

export type Mutations = {
    [MutationType.SetFields](state: State, fields: InputField[]): void;
    [MutationType.AddField](state: State, field: InputField): void;
    [MutationType.RemoveField](state: State, id: number): void;
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SetFields](state, fields) {
        state.fields = fields;
    },
    [MutationType.AddField](state, field) {
        state.fields.push(field);
    },
    [MutationType.RemoveField](state, id) {
        state.fields.splice(id, 1);
    },
}