const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'STEM Swift Academy',
      version: '1.0.0',
    },
    paths: {
      '/exams': {
        'post': {
          description: 'Create a new exam',
          requestBody: {
            description: 'The properties of the exam'
          },
          responses: {
            '201': {
              description: 'The newly created exam'
            }
          },
          tags: ['Exams']
        }
      },
      '/exams/{subject}': {
        'get': {
          description: 'Get all exams for the chosen subject',
          parameters: [{
            in: 'path',
            name: 'subject',
            type: 'string',
            required: true,
            description: 'The subject for the exams (english or math)'
          }],
          responses: {
            '200': {
              description: 'Returns a list of exams'
            }
          },
          tags: ['Exams']
        },
      },
      '/exams/{subject}/{examId}': {
        'get': {
          description: 'Retrieve an exam by id',
          parameters: [
            {
              in: 'path',
              name: 'subject',
              type: 'string',
              required: true,
              description: 'The subject for the exams (english or math)'
            },
            {
              in: 'path',
              name: 'examId',
              type: 'string',
              required: true,
              description: 'The id of the exam that should be retrieved.'
            }
          ],
          responses: {
            '200': {
              description: 'Returns the details for the exam which id has been selected.',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    items: {
                      '$ref': '#/components/schemas/Exam'
                    }
                  }
                }
              }
            }
          },
          tags: ['Exams']
        },
        'post': {
          description: 'Post answers and get results',
          parameters: [
            {
              in: 'path',
              name: 'subject',
              type: 'string',
              required: true,
              description: 'The subject for the exams (english or math)'
            },
            {
              in: 'path',
              name: 'examId',
              type: 'string',
              required: true,
              description: 'The id of the exam which answers are being submitted'
            }
          ],
          responses: {
            '200': {
              description: 'Returns the score of the submitted exam.'
            }
          },
          tags: ['Exams']
        },
        'put': {
          description: 'Update exam',
          parameters: [
            {
              in: 'path',
              name: 'subject',
              type: 'string',
              required: true,
              description: 'The subject for the exams (english or math)'
            },
            {
              in: 'path',
              name: 'examId',
              type: 'string',
              required: true,
              description: 'The id of the exam which answers are being submitted'
            }
          ],
          responses: {
            '200': {
              description: 'Returns status success.'
            }
          },
          tags: ['Exams']
        },
        'delete': {
          description: 'Delete an exam by id',
          parameters: [
            {
              in: 'path',
              name: 'subject',
              type: 'string',
              required: true,
              description: 'The subject for the exams (english or math)'
            },
            {
              in: 'path',
              name: 'examId',
              type: 'string',
              required: true,
              description: 'The id of the exam that should be deleted.'
            }
          ],
          responses: {
            '200': {
              description: 'Returns status: success',
            }
          },
          tags: ['Exams']
        }
      },
      '/exams/{subject}/{examId}/questions': {
        'get': {
          description: 'Get all questions for the selected exam',
          parameters: [
            {
              in: 'path',
              name: 'subject',
              type: 'string',
              required: true,
              description: 'The subject for the exams (english or math)'
            },
            {
              in: 'path',
              name: 'examId',
              type: 'string',
              required: true,
              description: 'The id of the exam that should be retrieved.'
            }
          ],
          responses: {
            '200': {
              description: 'Returns all the questions for the selected exam'
            }
          },
          tags: ['Exams']
        }
      },
      '/exams/{subject}/{examId}/results': {
        'get': {
          description: 'Get the results for the selected exam achieved by the current user',
          parameters: [
            {
              in: 'path',
              name: 'subject',
              type: 'string',
              required: true,
              description: 'The subject for the exams (english or math)'
            },
            {
              in: 'path',
              name: 'examId',
              type: 'string',
              required: true,
              description: 'The id of the exam that should be retrieved.'
            }
          ],
          responses: {
            '200': {
              description: 'Returns the score of the current user for the selected exam'
            }
          },
          tags: ['Exams']
        }
      },
      '/courses': {
        'get': {
          description: 'Get all courses',
          responses: {
            '200': {
              description: 'Returns all courses available'
            }
          },
          tags: ['Courses']
        }
      },
      '/courses/lectures': {
        'get': {
          description: 'Gets all the upcoming lectures for the current student',
          responses: {
            '400': {
              description: 'Returns a list with all the lectures for the user'
            }
          },
          tags: ['Courses']
        }
      },
      '/courses/{courseId}': {
        'get': {
          description: 'Get course details by id',
          parameters: [{
            in: 'path',
            name: 'courseId',
            type: 'string',
            required: true,
            description: 'The id of the selected course'
          }],
          tags: ['Courses']
        }
      },
      '/courses/{courseId}/register': {
        'post': {
          description: 'Register user for a chosen course',
          parameters: [{
            in: 'path',
            name: 'courseId',
            type: 'string',
            required: true,
            description: 'The id of the selected course'
          }],
          tags: ['Courses']
        }
      },
      '/auth': {
        'get': {
          description: 'Get all users',
          responses: {
            '200': {
              description: 'Returns all users'
            }
          },
          tags: ['Users']
        },
        'patch': {
          description: 'Update users',
          requestBody: {
            description: 'Data of all the users who should be updated',
          },
          responses: {
            '201': 'Returns status success'
          },
          tags: ['Users']
        }
      },
      '/auth/{userId}': {
        'get': {
          description: 'Get user info',
          parameters: [{
            in: 'path',
            name: 'courseId',
            type: 'string',
            required: true,
            description: 'The id of the selected course'
          }],
          responses: {
            '200': 'Returns the data for the user'
          },
          tags: ['Users']
        }
      },
      '/auth/register': {
        'post': {
          description: 'Register user in the app',
          requestBody: {
            description: 'Name, email, and password of the user'
          },
          responses: {
            '201': {
              description: 'Returns the newly registered user'
            }
          },
          tags: ['Users']
        }
      },
      '/auth/login': {
        'post': {
          description: 'Log in user in the app',
          requestBody: {
            description: 'Email, and password of the user'
          },
          responses: {
            '201': {
              description: 'Returns the user'
            }
          },
          tags: ['Users']
        }
      },
      '/auth/logout': {
        'get': {
          description: 'Log out the current user',
          responses: {
            '200': {
              description: 'Returns status success'
            }
          },
          tags: ['Users']
        }
      },
      '/students/{studentId}': {
        'get': {
          description: 'Get the student\'s information by student id',
          parameters: [{
            in: 'path',
            name: 'studentId',
            type: 'string',
            required: true,
            description: 'The id of the current student'
          }],
          responses: {
            '200': {
              description: 'Returns all the exams and scores of the current user'
            }
          },
          tags: ['Students']
        }
      }
    },
    components: {
      // schemas: {
      //   'Exam': {
      //     type: 'object',
      //     properties: {
      //       subject: {
      //         type: 'string',
      //         description: 'The subject of the exam (english or math)'
      //       },
      //       section: {
      //         type: 'string',
      //         description: 'The section that the exam covers (reading, writing, no calculator math, or calculator math'
      //       },
      //     },
      //     example: {
      //       subject: 'english',
      //       section: 'reading'
      //     }
      //   }
      // }

    },
  },
  apis: ['./src/routes*.js'], // files containing annotations as above
};

module.exports = { swaggerOptions };