import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

const questionsNumSlice = createSlice({
  name: 'questionsNum',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    resetQuestionsNum: () => ({ ...initialState })
  }
})

export const questionNumReducer = questionsNumSlice.reducer

export const { increment, resetQuestionsNum } = questionsNumSlice.actions

// export const questionNumReducer = (state = initialState, action) => {
//   if (action.type === QUESTION_NUM_ACTIONS.NUM_INCREMENT) {
//     return {
//       ...state,
//       value: state.value + 1
//     }
//   }
//   switch (action.type) {
//     case QUESTION_NUM_ACTIONS.RESET:
//       return {
//         ...initialState
//       }
//   }
//   return state
// }
