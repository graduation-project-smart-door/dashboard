export type ApiUserType = {
  id: string
  first_name: string
  last_name: string
  patronymic: string
  created_at: string
  updated_at: string
  person_id: string
  image: string
  email: string
  phone: string
  role: string
}

export type UserType = {
  id: string
  firstName: string
  lastName: string
  patronymic: string
  createdAt: string
  updatedAt: string
  personId: string
  image: File | null
  email: string
  phone: string
  role: string
}

export type UserLoginType = {
  email: string
  password: string
}
