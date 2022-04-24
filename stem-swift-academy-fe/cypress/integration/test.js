import { mockData } from './mockData';

describe('Home page', () => {
    it('Load home page', () => {
        cy.visit('/');
        cy.get('#main-title').should('contain', 'STEM SWIFT ACADEMY');
    });
});

describe('Login page', () => {
    it('Loads login page', () => {
        cy.visit('/login');
        cy.get('.login-form').should('exist');
    });

    it('Logs in the user with valid data', () => {
        cy.visit('/login');

        cy.get('input[name=email]').type(mockData.users[0].email);
        cy.get('input[name=password]').type(`${mockData.users[0].password}{enter}`);

        cy.url().should('include', '/');
        cy.get('nav').should('contain', 'Logout');
    });

    it('Displays validation message with empty email', () => {
        cy.visit('/login');

        cy.get('input[name=password]').type(`${mockData.users[0].password}{enter}`);

        cy.get('.validation-error').should('contain', 'Email is required!');
    });

    it('Displays error message with empty password', () => {
        cy.visit('/login');

        cy.get('input[name=email]').type(mockData.users[0].email);
        cy.get('input[name=password]').type(`{enter}`);

        cy.get('.validation-error').should('contain', 'Password is required!');
    });

    it('Displays error message with incorrect email', () => {
        cy.visit('/login');

        cy.get('input[name=email]').type(`${mockData.users[0].email}1`);
        cy.get('input[name=password]').type(`${mockData.users[0].password}{enter}`);

        cy.get('#swal2-title').should('contain', 'Error: Invalid email or password');
    });

    it('Displays error message with incorrect password', () => {
        cy.visit('/login');

        cy.get('input[name=email]').type(mockData.users[0].email);
        cy.get('input[name=password]').type(`${mockData.users[0].password}1{enter}`);

        cy.get('#swal2-title').should('contain', 'Error: Invalid email or password');
    });
});

describe('Logout', () => {
    it('Logs out the user', () => {
        cy.visit('/login');

        cy.get('input[name=email]').type(mockData.users[0].email);
        cy.get('input[name=password]').type(`${mockData.users[0].password}{enter}`);
    
        cy.get('nav').contains('Logout').click();
        cy.get('nav').should('not.contain', 'Logout');
        cy.get('nav').should('contain', 'Register');
    });
});

describe('Contacts page', () => {
    it('Loads contacts page', () => {
        cy.visit('/contacts');
        cy.get('.contacts').should('exist');
    });

    it('Displays office locations', () => {
        cy.visit('/contacts');
        cy.get('.contacts').should('contain', 'Blagoevgrad, Bulgaria, ul. Pirov');
    });

    it('Displays phone numbers', () => {
        cy.visit('/contacts');
        cy.get('.contacts').should('contain', '+3598 636 217 12');
    });

    it('Displays emails', () => {
        cy.visit('/contacts');
        cy.get('.contacts').should('contain', 'alex.mehandzhiyska@stemswift.com');
    });
});

describe('All courses page', () => {
    beforeEach(() => {
        cy.visit('/login');

        cy.get('input[name=email]').type(mockData.users[2].email);
        cy.get('input[name=password]').type(`${mockData.users[2].password}{enter}`);
    });

    it('Loads all courses', () => {
        cy.visit('/courses');

        cy.get('.course').should('have.length', 2);
    });

    it('Loads dates in the correct format', () => {
        cy.visit('/courses');

        cy.get('.course .dates-text').each(element => expect(element.text()).to.match(/\d{1,2}\.\d{1,2}\.\d{2,4} - \d{1,2}\.\d{1,2}\.\d{2,4}/));
    });

    it('Loads weekly lectures in the correct format', () => {
        cy.visit('/courses');

        cy.get('.course .time-text').each(element => expect(element.text()).to.match(/\d+ lectures x week/));
    });
});

describe('Course details page', () => {
    beforeEach(() => {
        cy.visit('/login');

        cy.get('input[name=email]').type(mockData.users[2].email);
        cy.get('input[name=password]').type(`${mockData.users[2].password}{enter}`);
        cy.visit('/courses/1');
    });

    it('Loads course details page', () => {
        cy.get('.course-details').should('exist');
    });

    it('Loads course basic info', () => {
        cy.get('.course-details .course-lecturer').should('exist');
        cy.get('.course-details .course-duration').should('exist');
        cy.get('.course-details .course-start-date').should(el => expect(el.text()).to.match(/\d{1,2}\.\d{1,2}\.\d{2,4}/));
        cy.get('.course-details .course-end-date').should(el => expect(el.text()).to.match(/\d{1,2}\.\d{1,2}\.\d{2,4}/));
        cy.get('.course-details .course-textbook').should('exist');
        cy.get('.course-details .course-lectures-link').should('exist');
    });

    it('Loads course study plan', () => {
        cy.get('.study-plan').should('exist');
        cy.get('.week').should('have.length', 4);
    });

    it('Course register button is disabled for already registered student', () => {
        cy.get('.register-btn').should('contain', 'Registered');
        cy.get('.register-btn').should('be.disabled');
    });

    it('Course register button is enabled for non-registered student', () => {
        cy.visit('/');
        cy.get('nav').contains('Logout').click();

        cy.visit('/login');

        cy.get('input[name=email]').type(mockData.users[1].email);
        cy.get('input[name=password]').type(`${mockData.users[1].password}{enter}`);
        cy.visit('/courses/1');

        cy.get('.register-btn').should('contain', 'Register');
        cy.get('.register-btn').should('not.be.disabled');
    });
});

describe('Calendar page', () => {
    it('Loads all topics on calendar when student is registered for course', () => {
        cy.visit('/login');

        cy.get('input[name=email]').type(mockData.users[2].email);
        cy.get('input[name=password]').type(`${mockData.users[2].password}{enter}`);
        cy.visit('/calendar');

        cy.get('button').contains('Next').click();
        cy.get('.rbc-event-content').first().should('exist');
    });

    it('Does NOT load topics on calendar when student is NOT registered for course', () => {
        cy.visit('/login');

        cy.get('input[name=email]').type(mockData.users[1].email);
        cy.get('input[name=password]').type(`${mockData.users[1].password}{enter}`);
        cy.visit('/calendar');

        cy.get('button').contains('Next').click();
        cy.get('.rbc-event-content').should('not.exist');
    });
});

describe('Route guards', () => {
    it('Register page does NOT load when user is already logged in', () => {
        cy.visit('/login');

        cy.get('input[name=email]').type(mockData.users[0].email);
        cy.get('input[name=password]').type(`${mockData.users[0].password}{enter}`);

        cy.visit('/register');
        cy.url().should('include', '/');
        cy.get('#main-title').should('exist');
    });

    it('Login page does NOT load when user is already logged in', () => {
        cy.visit('/login');

        cy.get('input[name=email]').type(mockData.users[0].email);
        cy.get('input[name=password]').type(`${mockData.users[0].password}{enter}`);

        cy.visit('/login');
        cy.url().should('include', '/');
        cy.get('#main-title').should('exist');
    });

    it('Courses page does NOT load when user is NOT logged in', () => {
        cy.visit('/courses');
        cy.url().should('include', '/login');
    });
    
    it('Course details page does NOT load when user is NOT logged in', () => {
        cy.visit('/courses/1');
        cy.url().should('include', '/login');
    });

    it('Topic page does NOT load when user is NOT logged in', () => {
        cy.visit('/courses/1/topics/1');
        cy.url().should('include', '/login');
    });
 
    it('Calendar page does NOT load when user is NOT logged in', () => {
        cy.visit('/calendar');
        cy.url().should('include', '/login');
    });
 
    it('Exams page does NOT load when user is NOT logged in', () => {
        cy.visit('/exams');
        cy.url().should('include', '/login');
    });   
 
    it('Exam subjects page does NOT load when user is NOT logged in', () => {
        cy.visit('/exams/english');
        cy.url().should('include', '/login');
    });   

    it('Exam details page does NOT load when user is NOT logged in', () => {
        cy.visit('/exams/english/7');
        cy.url().should('include', '/login');
    }); 
  
    it('Exam questions page does NOT load when user is NOT logged in', () => {
        cy.visit('/exams/english/7/questions');
        cy.url().should('include', '/login');
    });  

    it('Exam results page does NOT load when user is NOT logged in', () => {
        cy.visit('/exams/english/7/results');
        cy.url().should('include', '/login');
    });

    it('Student profile page does NOT load when user is NOT logged in', () => {
        cy.visit('/students/2');
        cy.url().should('include', '/login');
    });  

    it('Student notebook page does NOT load when user is NOT logged in', () => {
        cy.visit('/notebooks/2');
        cy.url().should('include', '/login');
    });  

    it('Kolb create page does NOT load when user is NOT logged in', () => {
        cy.visit('/notebooks/2/create');
        cy.url().should('include', '/login');
    });  

    it('Exam create page does NOT load when user is NOT teacher or owner', () => {
        cy.visit('/login');

        cy.get('input[name=email]').type(mockData.users[2].email);
        cy.get('input[name=password]').type(`${mockData.users[2].password}{enter}`); 

        cy.visit('/exams/create');
        cy.url().should('not.include', '/exams/create');
    });

    it('Exam edit page does NOT load when user is NOT teacher or owner', () => {
        cy.visit('/login');

        cy.get('input[name=email]').type(mockData.users[2].email);
        cy.get('input[name=password]').type(`${mockData.users[2].password}{enter}`); 

        cy.visit('/exams/english/7/edit');
        cy.url().should('not.include', '/exams/english/7/edit');
    });

    it('Users page does NOT load when user is NOT owner', () => {
        cy.visit('/login');

        cy.get('input[name=email]').type(mockData.users[1].email);
        cy.get('input[name=password]').type(`${mockData.users[1].password}{enter}`); 

        cy.visit('/users');
        cy.url().should('not.include', '/users');
    });
});