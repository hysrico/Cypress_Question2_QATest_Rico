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
            url : 'https://petstore.swagger.io/v2/pet',
            body : {
                "id": 0,
                "category": {
                  "id": 0,
                  "name": "string"
                },
                "name": "doggie",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "available"
              }

        }).then(function(response){
           
            expect(response.body).have.property('url');
            expect(response.body).to.deep.equal('json');
                "name": "doggie",
            
        });
    })

    it ('', function(){
        cy.request({
            method : '',
            url : '',

        }).then(function(response){
           
            expect(response.body).have.property('url');
            
        });
    })

    it ('', function(){
        cy.request({
            method : '',
            url : '',

        }).then(function(response){
           
            expect(response.body).have.property('url');
            
        });
    })

})