export const initial = [
    {
        id: Date.now(),
        name: 'Ricardo',
        email: 'ricardo@gmail.com'
    }
]

export function reducerContact (state, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':    
            return state.filter(contact => {
                return contact.id !== action.payload.id
            })
        default:
            throw new Error();
    }
}

