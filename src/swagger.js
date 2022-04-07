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
            required: true,
            description: 'The properties of the exam',
            content: {
              'application/json': {
                schema: {
                  '$ref': '#/components/schemas/Exam'
                }
              }
            }
          },
          responses: {
            '201': {
              description: 'The newly created exam',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'number',
                        description: 'The id of the newly created exam.'
                      },
                      subject: {
                          type: 'string',
                          description: 'The subject of the newly created exam.'
                      },
                      section: {
                        type: 'string',
                        description: 'The section of the newly created exam.'
                      },
                      instructions: {
                        type: 'string',
                        description: 'The instructions of the newly created exam.'
                      },
                      duration: {
                        type: 'number',
                        description: 'The duration of the newly created exam in minutes.'
                      },
                      text: {
                        type: 'string',
                        description: 'The text of the newly craeted exam.'
                      },
                      link: {
                        type: 'string',
                        description: 'The link to the pdf version of the newly createed exam.'
                      },
                      difficulty: {
                        type: 'string',
                        description: 'The difficulty of the newly created exam.'
                      }
                    },
                    example: {
                      id: 1,
                      subject: 'english',
                      section: 'writing',
                      instructions: 'Read the text and answer the questions.',
                      duration: 120,
                      text: 'Akira came in directly...',
                      link: 'https://satsuite.collegeboard.org/media/pdf/sat-practice-test-1.pdf',
                      difficulty: 'High'
                    }
                  }
                }
                
              }
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
              description: 'Returns a list of exams',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      properties: {
                        id: {
                          type: 'number',
                          description: 'The id of the newly created exam.'
                        },
                        subject: {
                            type: 'string',
                            description: 'The subject of the newly created exam.'
                        },
                        section: {
                          type: 'string',
                          description: 'The section of the newly created exam.'
                        },
                        instructions: {
                          type: 'string',
                          description: 'The instructions of the newly created exam.'
                        },
                        duration: {
                          type: 'number',
                          description: 'The duration of the newly created exam in minutes.'
                        },
                        text: {
                          type: 'string',
                          description: 'The text of the newly craeted exam.'
                        },
                        link: {
                          type: 'string',
                          description: 'The link to the pdf version of the newly createed exam.'
                        },
                        difficulty: {
                          type: 'string',
                          description: 'The difficulty of the newly created exam.'
                        }
                      }
                    },
                    example: [
                      {
                        id: 1,
                        subject: 'english',
                        section: 'writing',
                        instructions: 'Read the text and answer the questions.',
                        duration: 120,
                        text: 'Akira came in directly...',
                        link: 'https://satsuite.collegeboard.org/media/pdf/sat-practice-test-1.pdf',
                        difficulty: 'High'
                      },
                      {
                        id: 2,
                        subject: 'math',
                        section: 'nocalc',
                        instructions: 'Solve the problems',
                        duration: 180,
                        link: 'https://satsuite.collegeboard.org/media/pdf/sat-practice-test-1.pdf',
                        difficulty: 'Medium'
                      }
                    ]
                   
                  }
                }
                
              }
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
                  type: 'object',
                  schema: {
                    '$ref': '#/components/schemas/Exam'
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
              description: 'The subject for the exams (english or math)',
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
              description: 'Returns the score of the submitted exam.',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      score: {
                        type: 'number',
                        description: 'The score of the student on the exam'
                      }
                    },
                    example: {
                      score: 6
                    }
                  }
                }
              }
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
              description: 'Returns the score of the submitted exam.',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      score: {
                        type: 'number',
                        description: 'The score of the student on the exam'
                      }
                    },
                    example: {
                      score: 6
                    }
                  }
                }
              }
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
              description: 'Returns all the questions for the selected exam',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      '$ref': '#/components/schemas/Question'
                    }
                  }
                }
              }
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
              description: 'Returns the score of the current user for the selected exam',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      score: {
                        type: 'number',
                        description: 'The score of the student on the exam.'
                      }
                    }
                  }
                }
              }
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
              description: 'Returns all courses available',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      '$ref': '#/components/schemas/Course'
                    }
                  }
                }
              }
            }
          },
          tags: ['Courses']
        }
      },
      '/courses/lectures': {
        'get': {
          description: 'Gets all the upcoming lectures for the current student',
          responses: {
            200: {
              description: 'Returns all upcoming lectures',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      '$ref': '#/components/schemas/Lecture'
                    }
                  }
                }
              }
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
          responses: {
            200: {
              description: 'Returns the selected course.',
              content: {
                'application/json': {
                  schema: {
                    '$ref': '#/components/schemas/Course'
                  }
                }
              }
            }
          },
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
          responses: {
            201: {
              description: 'Registers the user for the course and returns the newly created object',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      user_id: {
                        type: 'number',
                        description: 'The user id'
                      },
                      course_id: {
                        type: 'number',
                        description: 'The course id'
                      }
                    },
                    example: {
                      user_id: 3,
                      course_id: 1
                    }
                  }
                }
              }
            }
          },
          tags: ['Courses']
        }
      },
      '/auth': {
        'get': {
          description: 'Get all users',
          responses: {
            '200': {
              description: 'Returns all users',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      '$ref': '#/components/schemas/User'
                    }
                  }
                }
              }
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
            '201': {
              description: 'Returns updated users',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      '$ref': '#/components/schemas/User'
                    }
                  }
                }
              }
            }
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
            '200': {
              description: 'Returns the data for the user',
              content: {
                'application/json': {
                  type: 'object',
                  schema: {
                    '$ref': '#/components/schemas/User'
                  }
                }
              }
            }
          },
          tags: ['Users']
        }
      },
      '/auth/register': {
        'post': {
          description: 'Register user in the app',
          requestBody: {
            description: 'Name, email, password and role of the user',
            content: {
              'application/json': {
                schema: {
                  '$ref': '#/components/schemas/User'
                }
              }
            }
          },
          responses: {
            '201': {
              description: 'Returns the newly registered user',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      name: {
                        type: 'string',
                        description: 'The name of the user.'
                      },
                      email: {
                        type: 'string',
                        description: 'The email of the user.'
                      },
                      role: {
                        type: 'string',
                        description: 'The role of the user (student, teacher or owner)'
                      },
                      token: {
                        type: 'string',
                        description: 'The generated token'
                      }
                    },
                    example: {
                      name: 'test',
                      email: 'test@abv.bg',
                      role: 'student',
                      token: '7u8jrvhq5s2byqxjmmuguiorufitjh6t'
                    }
                  }
                }
              }
            }
          },
          tags: ['Users']
        }
      },
      '/auth/login': {
        'post': {
          description: 'Log in user in the app',
          requestBody: {
            description: 'Logs in the user',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    email: {
                      type: 'string',
                      description: 'The email of the user.'
                    },
                    password: {
                      type: 'string',
                      description: 'The password of the user.'
                    }
                  }
                }
              }
            }
          },
          responses: {
            '201': {
              description: 'Returns the newly registered user',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      name: {
                        type: 'string',
                        description: 'The name of the user.'
                      },
                      email: {
                        type: 'string',
                        description: 'The email of the user.'
                      },
                      role: {
                        type: 'string',
                        description: 'The role of the user (student, teacher or owner)'
                      },
                      token: {
                        type: 'string',
                        description: 'The generated token'
                      }
                    },
                    example: {
                      name: 'test',
                      email: 'test@abv.bg',
                      role: 'student',
                      token: '7u8jrvhq5s2byqxjmmuguiorufitjh6t'
                    }
                  }
                }
              }
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
      schemas: {
        'User': {
          type: 'object',
          required: ['name', 'email', 'password', 'role'],
          properties: {
            name: {
              type: 'string',
              description: 'The name of the user.'
            },
            email: {
              type: 'string',
              description: 'The email of the user.'
            },
            password: {
              type: 'string',
              description: 'The password of the user.'
            },
            role: {
              type: 'string',
              description: 'The role of the user (student/teacher/owner).'
            }
          },
          example: {
            name: 'Manioka Tapioka',
            email: 'manioka@abv.bg',
            password: 'asdasd',
            role: 'student'
          }
        },
        'Exam': {
          type: 'object',
          required: [
            'subject',
            'section',
            'duration',
            'instructions',
            'difficulty'
          ],
          properties: {
            subject: {
              type: 'string',
              description: 'The subject of the exam'
            },
            section: {
              type: 'string',
              description: 'The section that the exam covers (reading, writing, no calculator math, or calculator math'
            },
            duration: {
              type: 'number',
              description: 'The duration of the exam in minutes'
            },
            instructions: {
              type: 'string',
              description: 'Instructions for the student to read before they start the exam.'
            },
            text: {
              type: 'string',
              description: 'A text that the students have to read in order to answer the questions.'
            },
            link: {
              type: 'string',
              description: 'A link to the pdf version of the exam.'
            },
            difficulty: {
              type: 'string',
              description: 'The difficulty of the exam (Low, Medium, High)'
            }
          },
          example: {
            subject: 'english',
            section: 'reading',
            duration: 90,
            instructions: 'Read the text and answer the questions',
            text: 'Akira came in directly...',
            link: 'https://satsuite.collegeboard.org/media/pdf/sat-practice-test-1.pdf',
            difficulty: 'High'
          }
        },
        'Question': {
          type: 'object',
          required: ['title', 'correct_answer', 'explanation', 'exam_id'],
          properties: {
            type: {
              type: 'string',
              description: 'The type of question element. Default value is radiogroup'
            },
            title: {
              type: 'string',
              description: 'The content of the question.'
            },
            correct_answer: {
              type: 'string',
              description: 'The correct answer to the question.'
            },
            explanation: {
              type: 'string',
              description: 'A paragraph explaining the correct and wrong answers in detail.'
            },
            exam_id: {
              type: 'number',
              description: 'A foreign key to the exams table.'
            }
          },
          example: {
            title: 'What does 3 + 5 equal?',
            correct_answer: '8',
            explanation: 'If I have 3 apples and you give me 5 more, I will have 8 apples.',
            exam_id: 1
          }
        },
        'Answer': {
          type: 'object',
          required: ['content', 'question_id'],
          properties: {
            content: {
              type: 'string',
              description: 'The content of the answer.'
            },
            question_id: {
              type: 'number',
              description: 'Foreign key to the questions table'
            }
          },
          example: {
            content: '8',
            question_id: 1
          }
        },
        'Course': {
          type: 'object',
          required: ['start_date', 'end_date'],
          properties: {
            start_date: {
              type: 'date',
              description: 'The start date of the course.'
            },
            end_date: {
              type: 'date',
              description: 'The end date of the course.'
            },
            lecturer: {
              type: 'string',
              description: 'The course lecturer name'
            },
            textbook: {
              type: 'string',
              description: 'The title of the textbook which is going to be used during the course.'
            },
            lectures_link: {
              type: 'string',
              description: 'Link to the live lectures'
            },
            duration: {
              type: 'number',
              description: 'The duration of the course in months.'
            },
            weekly_lectures: {
              type: 'number',
              description: 'The courseload (number of lectures per week).'
            }
          },
          example: {
            start_date: '2022-03-03',
            end_date: '2022-05-03',
            lecturer: 'Theodore Donald',
            textbook: 'Princeton review',
            lectures_link: 'https://zoom.us',
            duration: 2,
            weekly_lectures: 3
          }
        },
        'Lecture': {
          type: 'object',
          required: ['title', 'subject', 'week_number', 'date', 'course_id'],
          properties: {
            title: {
              type: 'string',
              description: 'The title of the topic'
            },
            subject: {
              type: 'string',
              description: 'The subject of the topic (English, Math, etc.).'
            },
            week_number: {
              type: 'number',
              description: 'The number of the week when the topic will be covered.'
            },
            date: {
              type: 'date',
              description: 'The date of the lecture.'
            },
            course_id: {
              type: 'number',
              description: 'Foreign key to the courses table.'
            },
            time: {
              type: 'number',
              description: 'The starting time of the lecture in minutes'
            }
          },
          example: {
            title: 'Radicals and rational exponents',
            subject: 'Math',
            week_number: 2,
            date: '2022-04-03',
            course_id: 1,
            time: 16
          }
        },
        'Kolb': {
          type: 'object',
          required: ['question', 'correct_answer', 'user_answer', 'what', 'why', 'how'],
          properties: {
            question: {
              type: 'string',
              description: 'The question which the student creates the kolb on.'
            },
            correct_answer: {
              type: 'string',
              description: 'The correct answer to the question.'
            },
            user_answer: {
              type: 'string',
              description: 'The answer the user has selected.'
            },
            what: {
              type: 'string',
              description: 'Which part of the problem the student got wrong / wasn\'t sure about.'
            },
            why: {
              type: 'string',
              description: 'Why the student got it wrong, what conception didn\'t he/she understand correctly'
            },
            how: {
              type: 'string',
              description: 'How the student can avoid making the same mistake again.'
            },
            notebook_id: {
              type: 'number',
              description: 'Foreign key to the notebooks table'
            }
          },
          example: {
            question: 'What does 6 + 8 equal?',
            correct_answer: '14',
            user_answer: '-2',
            what: 'I misread the question',
            why: 'I was running out of time',
            how: 'Better time management.',
            notebook_id: 1
          }
        }
      }
    },
  },
  apis: ['./src/routes*.js'], // files containing annotations as above
};

module.exports = { swaggerOptions };