describe('HTTP Example', function(){
    
    it ('GET', function(){
        cy.request({
            method : 'GET',
            url : 'https://petstore.swagger.io/v2/pet/findByStatus?status=available',

        }).then(function(response){
           
            expect(response.body).have.property('url');
            
        });
    })

    it ('POST', function(){
        cy.request({
            method : 'POST  ',
            url : 'https://petstore.swagger.io/v2/pet/9223372036854037528',

        }).then(function(response){
           
            expect(response.body).have.property('url');
            
        });
    })

    it ('', function(){
        cy.request({
            method : 'POST  ',
            url : 'https://petstore.swagger.io/v2/pet/9223372036854037528',

        }).then(function(response){
           
            expect(response.body).have.property('url');
            
        });
    })

})