const StudentController = require('../controllers/student');

describe('StudentController', () => {
  let mockService;
  let controller;

  beforeEach(() => {
    mockService = {
      getAllStudents: jest.fn(),
    };
    controller = new StudentController(mockService);
  });

  test('should get all students', async () => {
    const students = [
        { id: 'A01234354', name: 'Miguel Mendoza', grade: 10, debt: true },
        { id: 'A01234355', name: 'Fernando Monroy', grade: 10, debt: false },
        { id: 'A01234356', name: 'Regina Cavazos', grade: 5 , debt: true},
        { id: 'A01234357', name: 'Jorge Salcedo', grade: 4, debt: false }
    ];

    mockService.getAllStudents.mockResolvedValue(students);

    const result = await controller.getAll();
    expect(result).toEqual(students);
    expect(mockService.getAllStudents).toHaveBeenCalledTimes(1);
  });

});
