import { faker } from '@faker-js/faker'
import 'cypress-plugin-api'

const options = { env: { snapshotOnly: true } }

describe('Create Issue', options, () => {
    const issue = {
        title: `issue.-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }
    }

    beforeEach(() => {
        cy.api_deleteProjects()
        cy.login()
        cy.api_createProject(issue.project)
    })

    it('succesfully', () => { 
        cy.gui_createIssue(issue)       

        cy.get('.issue-details')
            .should('contain', issue.title)
            .should('contain', issue.description)        
        })
})