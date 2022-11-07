import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sarthak Narang',
    email: 'sarthak@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'vishvam Salwan',
    email: 'vishvam@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
