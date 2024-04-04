import Website from "@/app/models/Website";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const websites = await Website.find();

    return NextResponse.json({ websites }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}


export async function POST(req) {
  try {
    const body = await req.json();
    const { name } = body;
    const WebsiteData = body.formData;

    const existingWebsite = await Website.findOne({ name });
    if (existingWebsite) {
      return NextResponse.json({ message: "این وبسایت وجود دارد" }, { status: 400 });
    }

    await Website.create(categoryData);

    return NextResponse.json({ message: "وبسایت با موفقیت اضافه شد" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}