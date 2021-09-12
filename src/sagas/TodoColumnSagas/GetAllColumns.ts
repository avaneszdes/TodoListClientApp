import {call, put, takeEvery} from 'redux-saga/effects'
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {
    GET_ALL_COLUMNS,
    GET_ALL_COLUMNS_SUCCEED,
} from '../../redux/constants';
import httpRequest from "../httpConfig";
import host from '../../Common/Constants'
import {Item, TodoColumn} from "../../components/Interfaces";

function* getAllColumnsWorker() {

    function compare( a: Item, b: Item ) {
        if ( a.updatedItemId < b.updatedItemId ){
            return -1;
        }
        if ( a.updatedItemId > b.updatedItemId ){
            return 1;
        }
        return 0;
    }

    const httpConfig: AxiosRequestConfig = {
        method: 'GET',
        url: `${host.host}api/column`,
    }

    let response: AxiosResponse = yield call(() => httpRequest(httpConfig));

    console.log(response)
    if (response.status === 200) {
        const columns = response.data.map((x: TodoColumn) => {
            return {
                id: x.id,
                columnName: x.columnName,
                todoItems: x?.todoItems.map((i: Item) => {
                    return {
                        id: i.id,
                        text: i.text,
                        isComplete: i.isComplete,
                        createdDate: new Date(i.createdDate).toLocaleDateString() + ' ' + new Date(i.createdDate).toLocaleTimeString(),
                        updatedItemId: i.updatedItemId
                    }
                }).sort(compare)
            }
        })
        yield put({type: GET_ALL_COLUMNS_SUCCEED, payload: columns})
    }
}

export function* watchAllColumns() {
    yield takeEvery(GET_ALL_COLUMNS, getAllColumnsWorker)
}
