import { ADD_STUDENT, MODIFY_STUDENT } from "./action";

const initialState = {
  students: [],
};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT: {
      return { ...state, user: state.students.push(action.payload.data) };
    }
    case MODIFY_STUDENT: {
      const userIndex = state.students.indexOf(
        (student) => student.id === action.payload.id
      );
      state.students[userIndex] = action.payload.data;
      return state;
    }

    default:
      return state;
  }
};


export default userReducer;


