export interface ActionProps {
	type: string;
	payload: any;
}

const INITIAL_STATE = {
	currentUser: null,
};
const userReducer = (state = INITIAL_STATE, action: ActionProps) => {
	switch (action.type) {
		case "SET_CURRENT_USER":
			return {
				...state,
				urrentUser: action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
