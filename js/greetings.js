const greet = (word, { first_name, last_name }) => `${word}, ${first_name} ${last_name}!`

export const goodMorning = person => greet('Good Morning', person)
export const goodAfternoon = person => greet('Good Afternoon' , person)
