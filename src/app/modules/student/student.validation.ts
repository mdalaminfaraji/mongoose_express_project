import { z } from 'zod';

const userNameSchema = z.object({
  firstName: z.string().trim().min(1).max(20),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
});

const guardianSchema = z.object({
  fatherName: z.string().min(1),
  fatherContactNo: z.string().min(1),
  fatherOccupation: z.string().min(1),
  motherContactNo: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().optional(),
});

const localGuardianSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

const studentValidationSchema = z.object({
  id: z.string().min(1),
  password: z.string().max(20),
  name: userNameSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().optional(),
  email: z.string().email().min(1),
  contactNo: z.string().min(1),
  emergencyContactNo: z.string().min(1),
  bloodGroup: z
    .enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().min(1),
  permanentAddress: z.string().min(1),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean(),
});

export default studentValidationSchema;
