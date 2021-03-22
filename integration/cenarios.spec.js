
const urlBase = "https://gorest.co.in/"
const rota = "public-api/users"

const headers = {"Content-Type":"application/json", "Authorization": "Bearer 44dbed576f7ae61bc683b19918bafe529760c58afaafedbd0189a96d19be2f28"}
//embed usado para concatenar as variaveis

const name = `${cy.faker.firstName()} ${cy.faker.lastName()}`
//const gender
//const email
//const status 
const body = `{"name":"${name}", "gender":"Male", "email":"a.t.ramakrishna@15ce.com", "status":"Active"}`

describe ('Cadastrar Usuário', () =>{
    it('Cadastrar usuário com sucesso', () =>{
        cy.request({
            url: `${urlBase}${rota}`,
            method: 'POST',
            headers: headers,
            body: body,
            failOnStatusCode: false 
        }).as('criarUsuario')
        
        cy.get('@criarUsuario').then((response) => {
            console.log(response.body)
        } )
    })
}) 