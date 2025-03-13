import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contactus() {
  return (
    <div className="flex flex-col items-center text-center mt-12 md:mt-16 px-6 md:px-8 w-full max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Let's Stay Connected
      </h2>
      <p className="text-lg text-gray-600 mt-4 max-w-3xl">
        Stay in touch with us! We'd love to hear from you and assist you with
        any inquiries.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-8">
        <Input
          type="text"
          placeholder="Enter your Name"
          className="w-full h-14 p-3 border rounded-lg shadow-sm"
        />
        <Input
          type="email"
          placeholder="Enter your Email"
          className="w-full h-14 p-3 border rounded-lg shadow-sm"
        />
        <Input
          type="text"
          placeholder="Company (Optional)"
          className="w-full h-14 p-3 border rounded-lg shadow-sm"
        />
        <Input
          type="tel"
          placeholder="Enter your Phone Number"
          className="w-full h-14 p-3 border rounded-lg shadow-sm"
        />
      </div>
      <Textarea
        placeholder="Type your message here."
        className="w-full max-w-4xl mt-6 h-32 p-3 border rounded-lg shadow-sm"
      />

      <p className="text-sm text-gray-500 mt-4 max-w-3xl">
        By clicking the contact us button, you agree to our{" "}
        <span className="text-blue-600 underline cursor-pointer">
          terms and policy
        </span>
        .
      </p>
      <Button className="mt-6 px-10 py-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all font-bold text-lg">
        Contact Us
      </Button>
    </div>
  );
}
