const env = Deno.env.toObject()

export const PORT = +env.PORT || 4000