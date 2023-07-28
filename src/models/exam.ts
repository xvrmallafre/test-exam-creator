import { PrismaClient } from "@prisma/client";

export const getExamFromId = async (id: string) => {
    const prisma = new PrismaClient();
    let exam = null;
    
    try {
        exam = await prisma.exam.findUnique({
            where: {
                id,
            },
        });
    } catch (error) {
        console.log(error);
    }

    return exam;
}

export const setExam = async (exam: any) => {
    const prisma = new PrismaClient();
    let newExam = null;

    try {
        newExam = await prisma.exam.create({
            data: {
                ...exam,
            },
        });
    } catch (error) {
        console.log(error);
    }

    return newExam;
}