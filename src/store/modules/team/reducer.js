import produce from 'immer';

export default function team (state = [] , action) {
    console.log(state);
    switch (action.type){
        case '@team/ADD':
            return produce(state, draft =>{
                const peopleIndex = draft.findIndex(p => p.id === action.people.id);
                if(peopleIndex >= 0){
                    draft.splice(peopleIndex,1);                     
                }else{
                    draft.push({
                        ... action.people, amount: 1,
                    });
                }                
            });
        case '@team/REMOVE':
            return produce(state, draft => {
                const peopleIndex = draft.findIndex(p => p.id === action.id);
                if(peopleIndex >= 0){
                    draft.splice(peopleIndex,1);
                }
            });
        default:
            return state;
    }

    
}