import {all} from 'redux-saga/effects'
import {watchAddTodo} from "./TodoListSagas/AddTodo";
import {watchRegistration} from "./Registration";
import {watchAuthorization} from "./Authorization";
import {watchEditUser} from "./UserSagas/EditUser";
import {watchSendEmail} from "./UserSagas/SendPasswordToEmail";
import {watchEditTodo} from "./TodoListSagas/EditTodo";
import {watchCompleteTodo} from "./TodoListSagas/CompleteTodo";
import {watchGetTodoList} from "./TodoListSagas/GetTodoLIst";
import {watchDeleteTodo} from "./TodoListSagas/DeleteTodo";
import {watchGetUsersList} from "./UserSagas/GetUsers";
import {watchDeleteUser} from "./UserSagas/DeleteUser";
import {watchUpdateUserPhoto} from "./UserSagas/UpdateUserPhoto";
import {watchGetUserPhoto} from "./UserSagas/GetUserPhoto";
import {watchChangeEmail} from "./UserSagas/UpdatePassword";
import {watchCreateColumn} from "./TodoColumnSagas/CreateColumn";
import {watchGetColumn} from "./TodoColumnSagas/GetColumn";
import {watchAllColumns} from "./TodoColumnSagas/GetAllColumns";
import {watchDeleteColumn} from "./TodoColumnSagas/DeleteColumnById";
import {watchMoveItem} from "./TodoColumnSagas/MoveItem";

export function* rootSaga () {
    yield all([
        watchAddTodo(),
        watchEditTodo(),
        watchGetTodoList(),
        watchCompleteTodo(),
        watchDeleteTodo(),
        watchRegistration(),
        watchAuthorization(),
        watchGetUsersList(),
        watchDeleteUser(),
        watchEditUser(),
        watchUpdateUserPhoto(),
        watchGetUserPhoto(),
        watchSendEmail(),
        watchChangeEmail(),
        watchCreateColumn(),
        watchGetColumn(),
        watchAllColumns(),
        watchDeleteColumn(),
        watchMoveItem()
    ]);
}
