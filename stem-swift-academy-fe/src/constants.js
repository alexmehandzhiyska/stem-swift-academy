const baseUrl = 'http://localhost:5500';
const examTypes = [
    {
        name: 'SAT',
        endpoint: 'sat/subject'
    },
    {
        name: 'USMLE Step 1',
        endpoint: 'usmle'
    }
]

export { baseUrl, examTypes };