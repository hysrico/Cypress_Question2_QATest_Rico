describe('HTTP Example', function(){
    
    it ('GET', function(){
        cy.request({
            method : 'GET',
            url : 'http://petstore.swagger.io/v2/store/order/5',

        }).then(function(response){
           
            expect(response.body).have.property('url');
            
        });
    })

})