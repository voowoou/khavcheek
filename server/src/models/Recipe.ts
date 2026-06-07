import { Schema, model } from 'mongoose';

const UNITS = ['g', 'ml', 'pcs', 'tsp', 'tbsp', 'toTaste'] as const;

const ingredientSchema = new Schema({
  ingredient: { type: String, required: true },
  amount: { type: Number, required: true },
  unit: { type: String, enum: UNITS, required: true },
});

const recipeSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tags: { type: [String], default: [] },
    defaultServings: { type: Number, required: true },
    ingredients: { type: [ingredientSchema], required: true },
    directions: { type: [String], required: true },
  },
  { timestamps: true }
);

export const Recipe = model('Recipe', recipeSchema);
