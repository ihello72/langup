import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    myBook: {
        status: 'INIT',
        message: '조회 완료',
        list: [],
    },
    focusBook: {
        status: 'FAILURE',
        message: '상세 보기 조회 완료',
        idx: null,
        title: 'LOADING ...',
        createDate: 'LOADING ...',
        words: [],
    },
};

const wordReducer = (state, action) => {
    if (typeof state === "undefined") {
        state = initialState;
    }

    switch (action.type) {
        case types.AUTH_LOGOUT_SUCCESS:
            return state = initialState;
        case types.MY_WORD_BOOK_LIST_SUCCESS:
            return update(state, {
                myBook: {
                    status: { $set: 'SUCCESS' },
                    list: { $set: action.list },
                }
            });
        case types.MY_WORD_BOOK_LIST_FAILURE:
            return update(state, {
                myBook: {
                    status: { $set: 'FAILURE' },
                    message: { $set: action.message },
                }
            });
        case types.MY_WORD_BOOK_SHOW_SUCCESS:
            return update(state, {
                focusBook: {
                    status: { $set: 'SUCCESS' },
                    idx: { $set: action.idx },
                    title: { $set: action.title },
                    createDate: { $set: action.create_date },
                    words: { $set: action.words }
                }
            });
        case types.MY_WORD_BOOK_SHOW_FAILURE:
            return update(state, {
                focusBook: {
                    status: { $set: 'FAILURE' },
                    message: { $set: action.message },
                }
            });
        default:
            return state;
    }
};

export default wordReducer;