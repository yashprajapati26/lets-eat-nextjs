describe('API testing', () => {
    it('get all products', () => {
      // Start from the index page
      cy.request('GET','http://localhost:3000/api/products').then((res)=>{
        cy.log(JSON.stringify(res))
        expect(res.status).to.equal(200)


      })
   
      // Find a link with an href attribute containing "about" and click it
    //   cy.get('a[href*="about"]').click()
   
    //   // The new url should include "/about"
    //   cy.url().should('include', '/about')
   
    //   // The new page should contain an h1 with "About"
    //   cy.get('h1').contains('About')
    })
  })