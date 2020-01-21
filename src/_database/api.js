import getVegetablesFromLocalDB from './db'

const getVegetables = () => {

    return new Promise((resolve, reject) => {

        let vegetables = [];

        vegetables = getVegetablesFromLocalDB();

        if (vegetables.length > 0) resolve({status: 'OK', data: vegetables})
        else reject({status: 'ERROR', error: 'Cannot get vegetables'})

    })
}

export default getVegetables;