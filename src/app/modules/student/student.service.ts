import { Student } from '../student.model';
import { TStudent } from './student.interface';

const createStudentIntoDB = async (studentData: TStudent) => {
  // static method
  if (await Student.isUserExists(studentData?.id)) {
    throw new Error('User already exists!');
  }

  const result = await Student.create(studentData);

  // const student = new Student(studentData); //create an instance

  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!');
  // }

  // const result = await student.save(); //built in instance method

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id }); // built in static method

  return result;
};
const deleteStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id }, { isDeleted: true }); // built in static method

  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
