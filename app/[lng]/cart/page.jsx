import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";

function page() {
  return (
    <div>
      <Breadcrumbs />
      <div className="mx-14 flex-col">
        <p className="font-serif font-semibold pt-8 pb-5 ">Review Order</p>
        <div className="flex gap-4 ">
          <table className=" w-2/3 h-fit overflow-hidden border border-[#a5bcab] rounded-lg">
            <thead className="bg-[#a5bcab] border-b-2 border-[#5b8969] h-16">
              <tr>
                <td className="w-1/6 rounded-tl-lg"></td>
                <td className="w-5/12 text-[#5b8969]">Product Description</td>
                <td className="w-1/6 text-[#5b8969]">Quantity</td>
                <td className="w-1/6 text-[#5b8969]">Price</td>
                <td className="w-1/6 text-[#5b8969]">Clear All</td>
              </tr>
            </thead>
            <tbody>
              <tr className="h-20">
                <td>
                  <div></div>
                  <p></p>
                </td>
                <td>
                  <p></p>
                </td>
                <td ></td>
                <td></td>
                <td ></td>
              </tr>
            </tbody>
          </table>
          <div className="w-1/3 flex-col">
            <div className="w-full border border-[#a5bcab] rounded-md h-72 px-4 py-5">
              <div className=" w-full h-full ">
                <div className="w-full h-1/6">
                  <p className="h-full flex  font-serif font-medium text-xl">
                    Order Summary
                  </p>
                </div>
                <div className="w-full border-t border-pink-200"></div>
                <div className="w-full h-1/5 flex justify-between items-center my-3">
                  <p className="font-light italic">Subtotal</p>
                  <p className="text-pink-600 font-medium">Price</p>
                </div>
                <div className="w-full border border-black"></div>
                <div className="w-full h-1/5 flex justify-between items-center my-3">
                  <p className="font-light italic">Total</p>
                  <p className="text-pink-600 font-medium">Price</p>
                </div>
                <div className="w-full h-1/5 border-2 border-[#a5bcab] rounded-md hover:bg-[#e2e0e2] flex justify-center items-center">
                  <p className="text-pink-500 font-medium text-sm">Checkout</p>
                </div>
              </div>
            </div>
            <div className="w-full my-3 flex justify-end">
              <div className="w-1/2 h-1/5 border-2 border-[#a5bcab] rounded-md hover:bg-[#e2e0e2] flex justify-center items-center">
                <p className="text-pink-500 font-medium text-sm py-4">Continue Shopping</p>
              </div>
            </div>
          </div>
        </div>
      <div>
        <p>RELATED PRODUCTS</p>
      </div>
      </div>
    </div>
  );
}

export default page;
