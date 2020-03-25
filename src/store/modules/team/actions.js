export function addToTeam(people){
    return {
        type: '@team/ADD',
        people,
      }
}

export function removeFromTeam (id) {
    return {
        type: '@team/REMOVE', 
        id };
}