import { NextFunction, Request, Response, Router } from "express";
import { getDbClient } from "../../loaders/db";
import LoggerInstance from "../../loaders/logger";

export const updateProfile = async (body: any) => {
    try {
        const dbClient = await getDbClient();
        const userData = await dbClient
            .db()
            .collection("users")
            .findOne({ email: body.email });
        if (!userData) {
            return { code: 404, message: "User does not exist!" };
        }
        await dbClient
            .db()
            .collection("users")
            .findOneAndUpdate({ email: body.email }, { $set: body });
        return { code: 204, message: "User data Updated!" };
        
    } catch (err) {
        LoggerInstance.error(err);
        return { code: err.code || 500, message: { success: false, message: err.message || "ISR" } };
    }
};