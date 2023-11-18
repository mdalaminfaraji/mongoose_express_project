export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  latName: string;
};
export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female'; //union type literal
  dateOfBirth: string;

  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A-' | 'A+' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O-' | 'O+';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
};
