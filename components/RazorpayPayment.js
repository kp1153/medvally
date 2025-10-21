"use client";
import { useState } from "react";
import { CreditCard, Loader2 } from "lucide-react";

export default function RazorpayPayment({ amount, patientDetails }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Create order
      const orderResponse = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount * 100 }), // amount in paise
      });

      const order = await orderResponse.json();

      // Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // will update later
        amount: order.amount,
        currency: "INR",
        name: "MedValley Pvt. Ltd",
        description: "Medical Treatment Payment",
        order_id: order.id,
        prefill: {
          name: patientDetails?.name || "",
          email: patientDetails?.email || "",
          contact: patientDetails?.phone || "",
        },
        theme: {
          color: "#003366",
        },
        handler: async function (response) {
          // Verify payment
          const verifyResponse = await fetch("/api/razorpay/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const result = await verifyResponse.json();

          if (result.success) {
            alert("Payment Successful!");
            window.location.href = "/payment-success";
          } else {
            alert("Payment verification failed");
          }
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="w-full bg-[#003366] text-white py-4 rounded-lg font-semibold hover:bg-[#0066CC] transition flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" size={20} />
          Processing...
        </>
      ) : (
        <>
          <CreditCard size={20} />
          Pay Now
        </>
      )}
    </button>
  );
}
