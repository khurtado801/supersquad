// Action type
export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

// Action creator
export function addCharacterById(id) {
    // Action object, or just action
    const action = {
        type: ADD_CHARACTER,
        id
    };
    
    return action;
}

// Action creator
export function removeCharacterById(id) {
    const action = {
        type: REMOVE_CHARACTER,
        id
    };

    return action;
}
