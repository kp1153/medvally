// app/api/razorpay/create-order/route.js
import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // will add in .env
  key_secret: process.env.RAZORPAY_KEY_SECRET, // will add in .env
});

export async function POST(request) {
  try {
    const { amount } = await request.json();

    const order = await razorpay.orders.create({
      amount: amount,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
