import { cookies } from "next/headers"
import { and, eq } from "drizzle-orm"
import { z } from "zod"

import { db } from "@/lib/db"
import { users } from "@/lib/schema"
import { insertUserSchema } from "@/lib/validation"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const payload = insertUserSchema.parse(body)

        //@ts-ignore
        if (body.action === "login") {
            const resp = await db
                .select()
                .from(users)
                .where(
                    and(
                        eq(users.email, payload.email),
                        eq(users.password, payload.password)
                    )
                )

            return new Response(JSON.stringify(resp), {
                status: 200,
            })
        }

        //@ts-ignore
        else if (body.action === "register") {
            const resp = await db.insert(users).values({
                email: payload.email,
                password: payload.password,
            })
            return new Response(JSON.stringify(resp), { status: 200 })
        }

        return new Response(null, { status: 500 })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }

        return new Response(null, { status: 500 })
    }
}

const findUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5),
})

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const data = findUserSchema.parse({
            email: searchParams.get("email"),
            password: searchParams.get("password"),
        })

        const result = await db
            .select()
            .from(users)
            .where(
                and(
                    eq(users.email, data.email),
                    eq(users.password, data.password)
                )
            )

        if (result && result[0].id) {
            cookies().set("email", result[0].email)
            cookies().set("password", result[0].password)
            cookies().set("id", result[0].id.toString())
            return new Response(null, { status: 200 })
        }

        return new Response(null, { status: 404 })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }

        return new Response(null, { status: 500 })
    }
}