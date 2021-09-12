import {call, takeEvery} from 'redux-saga/effects'
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {MOVE_ITEM} from '../../redux/constants';
import httpRequest from "../httpConfig";
import host from '../../Common/Constants'
import {MoveItem} from "../../redux/action";

function* moveItemWorker(action: MoveItem) {

    const httpConfig: AxiosRequestConfig = {
        method: 'PUT',
        url: `${host.host}api/column`,
        data: action.payload
    }

    const response: AxiosResponse = yield call(() => httpRequest(httpConfig));
    if (response.status === 200) {

    }

}

export function* watchMoveItem() {
    yield takeEvery(MOVE_ITEM, moveItemWorker)
}
