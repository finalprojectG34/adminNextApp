describe('Category E2E Testing', () => {
    let logInInputs;

    before(() => {
        //load company data
        cy.fixture("login-data").then(val => {
            logInInputs = val;

            //login
            const phoneNumber = logInInputs["allValid"].phoneNumber;
            const password = logInInputs["allValid"].password;

            // cy.intercept("POST", "http://localhost:8000/graphql").as("login");
            cy.login(phoneNumber, password, (body) => {
                expect(body.data?.login).to.not.eq(null);
                // cy.wait("@login").then(() => {
                //     cy.storeToLocalStorage(body?.data?.login.token);
                // });
            });
        });
    });

    it('create categories from DOM', () => {
        const catName = 'cat 1';
        const catDescription = 'cat 1 description';

        cy.intercept("POST", "http://localhost:8000/graphql").as("list-categories");
        cy.visit('http://localhost:3000/category/create-category');

        cy.get('[data-cy=category-name-input]').type(catName);
        cy.get('[data-cy=category-description-input]').type(catDescription);

        cy.get('[data-cy=category-create-button]').click();
        cy.wait("@list-categories");
    });

    it('create category using post request', () => {

        const catName = 'cat 2';
        const catDescription = 'cat 2 description';

        const CREATE_CATEGORY = `
          mutation ($input: CategoryInput!) {
            createCategory(input: $input) {
              id
              description
              name
            }
          }
        `;

        cy.request({
            url: '/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                query: CREATE_CATEGORY,
                variables: {
                    'input':
                        {
                            'name': catName,
                            'description': catDescription
                        }
                }
            }
        }).then(response => {
            const data = response.body.data.createCategory;

            expect(data.name).to.be.eq(catName);
            expect(data.description).to.be.eq(catDescription);
        });
    });

    it('displays display list of categories', () => {
        cy.intercept("POST", "http://localhost:8000/graphql").as("list-categories");
        cy.visit('http://localhost:3000/category/category-list');
        cy.wait("@list-categories").then(() => {
            cy.get('[data-cy=category-list-row]').should("have.length.at.least", 2);
        });
    });

    it('delete the first category item', () => {
        cy.intercept("POST", "http://localhost:8000/graphql").as("list-categories");
        cy.visit('http://localhost:3000/category/category-list');
        cy.wait("@list-categories").then(() => {
            cy.get('[data-cy=delete-category]').first()
                .click();
        });
    });

    it('delete all categories', () => {
        cy.intercept("POST", "http://localhost:8000/graphql").as("list-categories");
        cy.visit('http://localhost:3000/category/category-list');
        cy.wait("@list-categories").then(() => {
            cy.get('[data-cy=delete-category]')
                .click({multiple: true});
            cy.get('[data-cy=category-list-row]').should("have.length", 0);
        });
    });
});
