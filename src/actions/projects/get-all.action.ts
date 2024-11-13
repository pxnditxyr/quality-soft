import { prisma } from '@/db'
import { defineAction } from 'astro:actions'

export const getAllServices = defineAction({
  accept: 'json',

  handler: async () => {

    const [ projects, count ] = await prisma.$transaction([
      prisma.project.findMany(),
      prisma.project.count()
    ])

    return {
      projects,
      total: count
    }

  }
})
