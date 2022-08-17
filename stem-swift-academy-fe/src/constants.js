const baseUrl = 'http://localhost:5500';

const subjects = [
    'english',
    'math',
    'medicine'
];

const examTypes = [
    {
        name: 'SAT',
        endpoint: 'sat/subject',
        defaultSubject: 'english'
    },
    {
        name: 'USMLE',
        endpoint: 'usmle',
        defaultSubject: 'medicine'
    }
];

const courseTypes = [
    {
        name: 'SAT',
        endpoint: 'sat'
    },
    {
        name: 'USMLE',
        endpoint: 'usmle'
    }
];

export { baseUrl, subjects, examTypes, courseTypes };