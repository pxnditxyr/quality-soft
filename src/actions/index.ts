import { usersSeed } from './seed'
import { createService, getAllServices, getOneService, toggleStatusService, updateService } from './services'
import { createUser, getAllUsers, getOneUser, toggleStatusUser, updateUser } from './users'

export const server = {

  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  toggleStatusUser,

  getAllServices,
  getOneService,
  createService,
  updateService,
  toggleStatusService,

  usersSeed,
}
