import { column, defineDb, defineTable } from 'astro:db'

const User = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
      unique: true,
    }),

    name: column.text(),
    lastName: column.text(),
    email: column.text({ unique: true }),
    password: column.text(),

    gender: column.text({ optional: true }),
    birthDate: column.text({ optional: true }),

    phone: column.text({ optional: true }),
    address: column.text({ optional: true }),


    role: column.text({ references: () => Role.columns.id }),

    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ default: new Date() }),
    status: column.boolean({ default: true }),
  },
})

const WorkerProfile = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
      unique: true,
    }),

    userId: column.text({ references: () => User.columns.id }),
    description: column.text({ optional: true }),
    dni: column.text({ optional: true }),
    portfolio: column.text({ optional: true }),

    approved: column.boolean({ default: false }),

    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ default: new Date() }),
    status: column.boolean({ default: true }),
  },
})

const Role = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true }),
    name: column.text(),
  },
})

const ServiceCategory = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true }),
    name: column.text(),
    description: column.text(),
    icon: column.text(),

    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ default: new Date() }),
    status: column.boolean({ default: true }),
  }
})

const Service = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true }),
    workerId: column.text({ references: () => WorkerProfile.columns.id }),
    categoryId: column.text({ references: () => ServiceCategory.columns.id }),
    title: column.text(),
    description: column.text(),
    price: column.number(),

    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ default: new Date() }),
    status: column.boolean({ default: true }),
  }
})

const Wallet = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true }),
    userId: column.text({ references: () => User.columns.id }),
    balance: column.number({ default: 0 }),

    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ default: new Date() }),
    status: column.boolean({ default: true }),
  }
})

const Transaction = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true }),
    walletId: column.text({ references: () => Wallet.columns.id }),
    amount: column.number(),
    description: column.text(),

    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ default: new Date() }),
    status: column.boolean({ default: true }),
  }
})

const Hiring = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true }),
    userId: column.text({ references: () => User.columns.id }),
    serviceId: column.text({ references: () => Service.columns.id }),
    contractDate: column.date(),

    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ default: new Date() }),
    status: column.boolean({ default: true }),
  }
})

const Review = defineTable({
  columns: {
    id: column.text({ primaryKey: true, unique: true }),
    hiringId: column.text({ references: () => Hiring.columns.id }),
    rating: column.number(),
    comment: column.text(),

    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ default: new Date() }),
    status: column.boolean({ default: true }),
  }
})


// https://astro.build/db/config
export default defineDb({
  tables: {
    User,
    WorkerProfile,
    Role,
    ServiceCategory,
    Service,
    Wallet,
    Transaction,
    Hiring,
    Review,
  }
});
