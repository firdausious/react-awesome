console.log('==== SESI 3')

const arrayOfWords = ['cucumber', 'tomatos', 'avocado']

const complicatedArray = ['cucumber', 44, true]

const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
        const newWords = words.map(word => {
            if (typeof word === 'string') {
                return word.toUpperCase()
            }

            return word
        })

        resolve(newWords)
    })
}

const sortWords = (words) => {
 return new Promise((resolve, reject) => {
     resolve(words.sort())
 })
}

makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then(result => console.log(result))
    .catch((err) => {
        console.error(err)
    });

makeAllCaps(complicatedArray)
    .then(sortWords)
    .then(result => console.log(result))
    .catch((err) => {
        console.error(err)
    });