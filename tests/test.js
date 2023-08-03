const pactum = require('pactum');
const request = pactum.request;

request.setDefaultTimeout(20000);
request.setBaseUrl('http://localhost:8887');

it('create employee test', async () => {
    const postRequestBody = {
        
            
              "dob": "2000-01-01",
              "email": "test@entry.com",
              "firstName": "Test",
              "lastName": "Entry"
            
          
    }
    await pactum.spec()
      .post('/api/v1/employees')
      .withJson(postRequestBody)
      .expectStatus(201);
  });
  
  const { spec } = require('pactum');

it('get all employees test', async () => {
  await pactum.spec()
    .get('/api/v1/employees')
    .inspect()
    .expectStatus(200);
});