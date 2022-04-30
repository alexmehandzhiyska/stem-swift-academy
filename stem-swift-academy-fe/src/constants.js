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
]

export { baseUrl, subjects, examTypes };