//describe('Access YouTube in English', () => {
  // it('Loads YouTube in English', () => {
  //   cy.visit('https://www.youtube.com/?hl=en');
  //   cy.title().should('eq', 'YouTube');
  
  //   cy.get('#search', { timeout: 100000 }).should('be.visible');

  //   cy.get('#search').type('cypress tutorial');
  
  
  // });

  describe('Search for a movie on YouTube', () => {
    it('should open YouTube and search for a movie', () => {
      cy.visit('https://www.youtube.com/?hl=en');
      cy.get('input#search')
        .should('be.visible')
        .type('The Shawshank Redemption{enter}');
      
    
        
    });
  });


//});
