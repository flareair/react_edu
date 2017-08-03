export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';
export const RESET_COUNT = 'RESET_COUNT';

export function increaseCount() {
	return {
		type: INCREASE_COUNT
	};
}

export function decreaseCount() {
	return {
		type: DECREASE_COUNT
	};
}

export function resetCount() {
	return {
		type: RESET_COUNT
	};
}
