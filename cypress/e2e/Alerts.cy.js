describe('alerts',()=>{
    it('simple alerts',()=>{
        //step first visit website
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        //step second click on button for aleart
        cy.get("button[onclick='jsAlert()']").click()
        //step 3 get the text from alert
        cy.on('window:confirm',(t)=>{
            //I am a js Alert
           expect(t).to.contains("i am a js aleart")

     })//assert we are checking/ validate
     cy.get("#result").should('have.txt',"You successfully click")
    })
})