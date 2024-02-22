describe('dynamic test of the wikipedia',()=>{
    it('Dynamic list',()=>{
        //step first visit website
    cy.visit("https://www.wikipedia.org/")
    //step second type in serarch box for getting listign suggetions
    cy.get("#search-input").click().type('mcd')
    //step three select macdownld from auto suggetsion
    cy.get(".suggestion-link").contains("onald's").click()
    })
})