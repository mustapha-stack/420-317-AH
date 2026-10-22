
import "dotenv/config";
import mongoose from "mongoose";
import User from "../models/user.model.js";

const COMPTES = [
  {
    email: "admin@supervision.test",
    role: "admin",
    variable: "SEED_ADMIN_PASSWORD",
  },
  {
    email: "operator@supervision.test",
    role: "operator",
    variable: "SEED_OPERATOR_PASSWORD",
  },
];

async function main() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error("MONGO_URI absent : verifiez votre fichier .env");
  }

  for (const { variable } of COMPTES) {
    if (!process.env[variable]) {
      throw new Error(`${variable} absent : verifiez votre fichier .env`);
    }
  }

  await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });

  try {
    for (const { email, role, variable } of COMPTES) {
      let user = await User.findOne({ email });

      if (user) {
        user.password = process.env[variable];
        user.role = role;
        await user.save();

        console.log(`Mot de passe mis a jour : ${email} (${role})`);
      } else {
        await User.create({
          email,
          password: process.env[variable],
          role,
        });

        console.log(`Cree : ${email} (${role})`);
      }
    }
  } finally {
    await mongoose.disconnect();
  }
}

main().catch((error) => {
  console.error("Echec :", error.message);
  process.exitCode = 1;
});
