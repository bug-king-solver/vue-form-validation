import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { State, InputField } from "./state";

export enum ActionType {
    GetAllFields = "GET_ALL_FIELDS",
    AddField = "ADD_FIELD",
    RemoveField = "REMOVE_FIELD",
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
};

export type Actions = {
    [ActionType.GetAllFields](context: ActionAugments): void;
    [ActionType.AddField](context: ActionAugments, field: InputField): void;
    [ActionType.RemoveField](context: ActionAugments, id: number): void;
}

export const actions: ActionTree<State, State> & Actions = {
    async [ActionType.GetAllFields]({ commit }) {
        const fields = [{ value: "ssdsds" }, { value: "sdssd" }];
        commit(MutationType.SetFields, fields);
    },
    async [ActionType.AddField]({ commit }, field) {
        commit(MutationType.AddField, field)
    },
    async [ActionType.RemoveField]({ commit }, id) {
        commit(MutationType.RemoveField, id)
    },
}