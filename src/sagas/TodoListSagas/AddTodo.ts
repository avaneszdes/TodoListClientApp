import {AddTodoAction, createTodoSucceed} from "../../redux/action";
import {call, put, select, takeEvery} from 'redux-saga/effects'
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {ADD_TODO} from "../../redux/constants";
import httpRequest from "../httpConfig";
import host from '../../Common/Constants'
import {IRootState} from "../../redux/configureStore";
import {TodoColumn} from "../../components/Interfaces";


function* addTodoWorker(action: AddTodoAction) {

    const column: TodoColumn[] = yield select((x: IRootState) => x.todos.todoColumns.filter(x => x.id === 1));

    const httpConfig: AxiosRequestConfig = {
        method: 'POST',
        url: `${host.host}api/todoList`,
        data: {
            text: action.payload,
            finished: false,
            columnId: 1,
            updatedItemId: column[0] == undefined ? 1 : column[0].todoItems.length
        }
    }
    const response : AxiosResponse = yield call(() => httpRequest(httpConfig));
    const createdDate =  new Date(response.data.createdDate).toLocaleDateString() + ' ' + new Date(response.data.createdDate).toLocaleTimeString()
    const addTodoSucceedAction = createTodoSucceed(response.data.id, action.payload, false,createdDate, column[0].todoItems.length);
    yield put(addTodoSucceedAction)
}

export function* watchAddTodo() {
    yield takeEvery(ADD_TODO, addTodoWorker)
}
