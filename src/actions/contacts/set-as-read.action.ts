import { prisma } from '@/db'
import { defineAction } from 'astro:actions'

export const setAsReadContact = defineAction({
  accept: 'json',
  handler: async ({ id }) => {
    const currentData = await prisma.contactMessage.findUnique({
      where: { id }
    })

    if ( !currentData ) {
      throw new Error( 'No se encontró el mensaje de contacto. 💁‍♂️' )
    }

    await prisma.contactMessage.update({
      where: { id },
      data: {
        state: "read"
      }
    })

    return {
      success: true
    }
  }
})