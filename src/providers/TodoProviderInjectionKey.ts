import type { InjectionKey, Ref, ComputedRef } from "vue";
import type { TodoType } from "../types/todo";

export const originTodoListInjectionKey: InjectionKey<Ref<TodoType[]>> =
  Symbol() as InjectionKey<Ref<TodoType[]>>;

export const showTodoListInjectionKey: InjectionKey<Ref<TodoType[]>> =
  Symbol() as InjectionKey<ComputedRef<TodoType[]>>;

export const searchKeywordInjectionKey: InjectionKey<Ref<string>> =
  Symbol() as InjectionKey<Ref<string>>;

export const fetchTodoListInjectionKey: InjectionKey<() => Promise<void>> =
  Symbol() as InjectionKey<() => Promise<void>>;

export const handleAddTodoInjectionKey: InjectionKey<
  (title: string, content: string) => void
> = Symbol() as InjectionKey<(title: string, content: string) => void>;

export const handleUpdateTodoInjectionKey: InjectionKey<
  (targetId: string, title: string, content: string) => void
> = Symbol() as InjectionKey<
  (targetId: string, title: string, content: string) => void
>;

export const handleDeleteTodoInjectionKey: InjectionKey<
  (targetId: string, targetTitle: string) => void
> = Symbol() as InjectionKey<(targetId: string, targetTitle: string) => void>;
