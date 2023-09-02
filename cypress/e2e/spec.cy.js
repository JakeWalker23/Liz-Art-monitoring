describe('Critical User Path', () => {
  it('should add a product to cart and checkout securely', () => {
    cy.viewport('macbook-15');
    
    cy.visit('/');
    
    cy.visit('/shop')

    cy.visit('/shop/studland-across-to-isle-of-wight');

    cy.wait(2000);

    cy.contains('Add to Cart').click();

    cy.wait(2000);

    cy.visit('/cart')

    cy.contains("Studland Across to Isle of Wight");

    cy.contains("Checkout securely").click();

    cy.visit('/cart');
    })
})