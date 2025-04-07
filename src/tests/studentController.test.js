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
    
    const mockStudents = [
        { id: 'A01234354', name: 'Miguel Mendoza', grade: 10, debt: 100 },
        { id: 'A01234355', name: 'Fernando Monroy', grade: 10, debt: 0 },
        { id: 'A01234356', name: 'Regina Cavazos', grade: 5, debt: 50 },
        { id: 'A01234357', name: 'Jorge Salcedo', grade: 4, debt: 0 }
    ];
      
    const expectedResult = [
        { matricula: 'A01234354', nombre: 'Miguel Mendoza', estatus: "Reestructura" },
        { matricula: 'A01234355', nombre: 'Fernando Monroy', estatus: "Aprobado" },
        { matricula: 'A01234356', nombre: 'Regina Cavazos', estatus: "Expulsado" },
        { matricula: 'A01234357', nombre: 'Jorge Salcedo', estatus: "Pendiente" }
    ];

    mockService.getAllStudents.mockResolvedValue(mockStudents);

    const result = await controller.getAll();
    expect(result).toEqual(expectedResult);
    expect(mockService.getAllStudents).toHaveBeenCalledTimes(1);
  });

});
