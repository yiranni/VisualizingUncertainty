const perspective = require('perspective-api-client')


API_KEY = 'AIzaSyAy-Dd9Gj_-oxmd_QPq_UvaunR_0Ra6kaw'
DISCOVERY_URL = 'https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1'

const input = 'Donald Trump is an idiot!'
main(input)
async function main(input) {
    const perspectiveClient = new perspective(
        options = {
            "apiKey": API_KEY}
    )
    
    const text = input;
    const result = await perspectiveClient.analyze(text);
    const toxicScore = result.attributeScores.TOXICITY.summaryScore.value;
    console.log(`Probabiltiy of [${text}] is toxic is: ${toxicScore}`)
    
}


