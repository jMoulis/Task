const FETCH_DATAS = 'FETCH_DATAS';

const initialState = {
  datas: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_DATAS: {
      return { ...state, datas: action.payload.datas };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

export const fetchDatas = payload => ({
  type: FETCH_DATAS,
  payload,
});
