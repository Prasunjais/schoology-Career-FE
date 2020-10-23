export default function generateActionTypes(...constants) {
    let actionTypes = {}

    constants.forEach(constant => {
        actionTypes = {
            ...actionTypes,
            [constant]: constant
        }
    })

    return actionTypes
}
