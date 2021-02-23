const emojiRegex = require('emoji-regex')()

describe("Generate Story", () => {
    it("Selects a length and displays a random story", () => {
        generateStory(5)
        cy
        .get('#emoji-story')
        .should(($story) => {
            expect(matches($story)).to.have.length(5)
        })
    })
})

describe("Submit Description", () => {
    it("Updates emoji history title", () => {
        cy
        .get('#history-title')
        .contains('0 Saved Stories')

        submitStory(3, "My wonderful emoji story with length 3")

        cy
        .get('#history-title')
        .contains('1 Saved Story')

        submitStory(5, "My wonderful emoji story with length 5")

        cy
        .get('#history-title')
        .contains('2 Saved Stories')
    })
    it("Records emoji stories", () => {
        submitStory(7, "My wonderful emoji story with length 7")

        cy
        .get('li').last()
        .should(($story) => expect(matches($story)).to.have.length(7))
    })
    it("Records story descriptions", () => {
        submitStory(4, "My wonderful emoji story with length 4")
        cy.get('li').last().contains("My wonderful emoji story with length 4")
    })
})

function generateStory(length) {
    cy 
    .get('#story-length-input')
    .clear()
    .type(length)
    .get('#generate-story-btn')
    .click()
}

function matches($story) {
    return $story.text().match(emojiRegex)
}

function submitStory(length, description) {
    generateStory(length)
    cy
    .get('#description-input')
    .clear()
    .type(description)
    .get('#submit-description-btn')
    .click()
}