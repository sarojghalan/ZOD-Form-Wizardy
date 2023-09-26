import { z } from "zod";

function createAddressSchema() {
  return z.object({
    id: z.number(),
    sCode: z
      .string()
      .refine((value) => value !== "0", {
        message: "Select one of the state",
      })
      .transform((value) => parseInt(value, 10)),
    dCode: z
      .string()
      .refine((value) => value !== "0", {
        message: "Select one of the district",
      })
      .transform((value) => parseInt(value, 10)),
    pCode: z
      .string()
      .refine((value) => value !== "0", {
        message: "Select one of the palika",
      })
      .transform((value) => parseInt(value, 10)),
    city: z.string().min(1, { message: "City is required" }),
    street: z.string().min(1, { message: "Street is required" }),
    contactNo: z
      .string()
      .min(1, { message: "Enter contact no." })
      .refine(
        (value) => {
          return /^\d+$/.test(value);
        },
        {
          message: "Enter a valid contact no.",
        }
      ),
    addressTypeId: z.number(),
  });
}

export const registerSchema = z.object({
  empId: z.number(),
  userId: z.number(),
  firstName: z.string().min(1, { message: "Enter your First Name" }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: "Enter your Last Name" }),
  email: z
    .string()
    .min(1, { message: "Enter your Email" })
    .email({ message: "Enter Valid Email" }),
  altEmail: z.string(),
  mobileNo: z
    .string()
    .min(1, { message: "Enter your mobile no." })
    .refine(
      (value) => {
        return /^\d+$/.test(value);
      },
      {
        message: "Enter a valid mobile no.",
      }
    ),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required" }),
  nationalId: z.string().refine(
    (value) => {
      return /^\d+$/.test(value);
    },
    {
      message: "Enter a valid national id eg: 111,122,133 etc.",
    }
  ),
  genderId: z
    .string()
    .refine((value) => value !== "0", {
      message: "Select one of the gender",
    })
    .transform((value) => parseInt(value, 10)),
  mStatusId: z
    .string()
    .refine((value) => value !== "0", {
      message: "Select one of the marital status",
    })
    .transform((value) => parseInt(value, 10)),
  bloodGrpId: z
    .string()
    .refine((value) => value !== "0", {
      message: "Select one of the blood group",
    })
    .transform((value) => parseInt(value, 10)),
  religionId: z
    .string()
    .refine((value) => value !== "0", {
      message: "Select one of the religion",
    })
    .transform((value) => parseInt(value, 10)),
  eContPerson: z.string(),
  eContNo: z.string(),
  relationId: z
    .string()
    .refine((value) => value !== "0", {
      message: "Select one of the relation",
    })
    .transform((value) => parseInt(value, 10)),
  photo: z.string(),
  postedBy: z.number(),
  address: z
    .object({
      primary: createAddressSchema(),
      temporary: createAddressSchema(),
    })
    .transform((value) => [value.primary, value.temporary]),
  familyDetail: z.array(
    z.object({
      id: z.number(),
      name: z.string().min(1, { message: "Name is required" }),
      relationId: z
        .string()
        .refine((value) => value !== "0", {
          message: "Select relation",
        })
        .transform((value) => parseInt(value, 10)),
      occupation: z.string().min(1, { message: "Occupation is required" }),
      doB: z.string().min(1, { message: "Date of birth is required" }),
      contactNo: z
        .string()
        .min(1, { message: "Enter contact no." })
        .refine(
          (value) => {
            return /^\d+$/.test(value);
          },
          {
            message: "Enter a valid contact no.",
          }
        ),
      nomineeOrder: z
        .string()
        .min(1, {
          message: "please select a nominee order",
        })
        .refine(
          (value) => {
            return /^\d+$/.test(value);
          },
          {
            message: "Enter a valid contact no.",
          }
        )
        .transform((value) => parseInt(value, 10)),
    })
  ),
});

export type RegisterSchemaInput = z.input<typeof registerSchema>;
export type RegisterSchemaOutput = z.output<typeof registerSchema>;
