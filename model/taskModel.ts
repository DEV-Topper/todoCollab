import { Document, Schema, model } from "mongoose";
import { iTodo } from "../utils/interface";

export interface iTodoData extends iTodo, Document {}

const todoModel = new Schema<iTodoData>(
	{
		task: {
			type: String,
		},
		achieved: {
			type: String || null,
			default: null,
		},
		deadLine: {
			type: String,
		},
		done: {
			type: String,
			default: "start",
		},
	},
	{
		timestamps: true,
	}
);

export default model<iTodoData>("todos", todoModel);
