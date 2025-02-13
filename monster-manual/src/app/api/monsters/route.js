import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "monsters.json");

export async function GET() {
  try {
    const fileContents = await fs.promises.readFile(dataFile, "utf8");
    const monsters = JSON.parse(fileContents);
    return NextResponse.json(monsters);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read monsters data" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const monster = await request.json();
    const fileContents = await fs.promises.readFile(dataFile, "utf8");
    const monsters = JSON.parse(fileContents);
    monsters.push(monster);
    await fs.promises.writeFile(dataFile, JSON.stringify(monsters, null, 2));
    return NextResponse.json(
      { message: "Monster added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add monster" },
      { status: 500 }
    );
  }
}
