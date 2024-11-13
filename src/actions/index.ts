import { createProject, getAllProjects, getOneProject, toggleStatusProject, updateProject } from './projects'
import { technologiesSeed, usersSeed } from './seed'
import { createService, getAllServices, getOneService, toggleStatusService, updateService } from './services'
import { getAllTechnologies } from './technologies'
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

  getAllProjects,
  getOneProject,
  createProject,
  updateProject,
  toggleStatusProject,

  getAllTechnologies,

  usersSeed,
  technologiesSeed,
}
