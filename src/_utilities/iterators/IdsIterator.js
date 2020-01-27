export const generateNextId = (array) => {

    let nextIds = -1;

    array.map(item => {
        if (item.id > nextIds) {
            nextIds = item.id
        }
    });

    return nextIds + 1;
};