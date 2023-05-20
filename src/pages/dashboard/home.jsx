import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
const dataListTitle = [];
export function Home() {
  return (
    <div className="mt-12">
      <div className="mb-10 ml-10 mr-10">
        <div className="flex flex-wrap">
          <div className="mx-auto w-full max-w-[650px]">
            <form
              className="bg-slate-400"
              action="https://formbold.com/s/FORM_ID"
              method="POST"
            >
              <div className=" block w-full pl-20 pr-20 text-base font-bold  uppercase text-[#07074D]">
                {" "}
                KIỂM TRA HÓA LỎNG THEO TCVN 9386:2012 THIẾT KẾ CÔNG TRÌNH CHỊU
                ĐỘNG ĐẤT
              </div>
              <div className="container flex  flex-col">
                <div className="flex flex-row justify-between  p-2">
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px]  w-full text-base text-xs font-medium text-[#07074D]"
                    >
                      Lớp
                    </label>
                    <input
                      placeholder="2"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full items-end rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2  ">
                    <label
                      for="fName"
                      className=" block h-[50px] w-full text-base text-xs font-medium text-[#07074D]"
                    >
                      Z (m)
                    </label>

                    <input
                      value="1.0"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      Chiều dày (m)
                    </label>
                    <input
                      placeholder="1.0"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className="  block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      Loại đất
                    </label>
                    <input
                      placeholder="Sand"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className="  block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      γw
                    </label>
                    <input
                      placeholder="17.30"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className="  block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      γd
                    </label>
                    <input
                      value="7.30"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className="  block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      Hàm lượng bụi
                    </label>
                    <input
                      placeholder="6.69"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      Hàm lượng sét
                    </label>
                    <input
                      placeholder="1.69"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      Chỉ số dẻo PI
                    </label>
                    <input
                      placeholder="0"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className=" flex flex-row  justify-between p-2 ">
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      FC (%)
                    </label>
                    <input
                      placeholder="22%"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      σ'v (kPa)
                    </label>
                    <input
                      value="17.3"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>

                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      Nspt
                    </label>
                    <input
                      placeholder="8.0"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      N1(60)
                    </label>
                    <input
                      value="8.00"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      σv (kPa)
                    </label>
                    <input
                      value="17.30"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      τe (kPa)
                    </label>
                    <input
                      value="1.91"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      τe /σ'v
                    </label>
                    <input
                      value="0.110"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      CM
                    </label>
                    <input
                      value="1.69"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      (τe /σ'v) /CM
                    </label>
                    <input
                      value="0.065"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className=" p-3 ">
                  <div className=" mb-2">
                    <label
                      for="fName"
                      className=" block text-base text-xs font-medium text-[#07074D]"
                    >
                      Đánh giá
                    </label>
                    <label
                      for="fName"
                      className="block text-base text-xs font-medium text-[#FF0000]"
                    >
                      Có khả năng hóa lỏng
                    </label>
                  </div>
                  <div className="">
                    <label
                      for="fName"
                      className=" block h-[20px] text-base text-xs font-medium text-[#07074D]"
                    >
                      Giới hạn chảy WL
                    </label>
                    <input
                      placeholder="0.0"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full p-3 ">
                  <div className="mb-3">
                    <label
                      for="fName"
                      className=" block h-[20px] text-base text-xs font-medium text-[#07074D]"
                    >
                      Độ ẩm đất W
                    </label>
                    <input
                      placeholder="0.0"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="">
                    <label
                      for="fName"
                      className=" block text-base text-xs font-medium text-[#07074D]"
                    >
                      0.9xWL
                    </label>
                    <label
                      for="fName"
                      className="block text-base text-xs font-medium text-[#FF0000]"
                    >
                      0.0
                    </label>
                  </div>
                </div>
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <table className="mx-auto mb-5 w-full max-w-[650px] table-auto text-left text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">STT</th>
            <th className="px-6 py-3">Đánh giá</th>
            <th className="px-6 py-3">0.9xWL</th>
            <th className="px-6 py-3"> </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">1</td>
            <td className="px-6 py-4 text-red-400">Có khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">0.0</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">2</td>
            <td className="px-6 py-4 text-red-400">Có khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">0.0</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">3</td>
            <td className="px-6 py-4 text-red-400">Có khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">0.0</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">4</td>
            <td className="px-6 py-4 text-red-400">Có khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">0.0</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">5</td>
            <td className="px-6 py-4 text-red-400">Có khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">0.0</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">6</td>
            <td className="px-6 py-4 text-red-400">Có khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">0.0</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <hr class="my-8 h-px border-0 bg-gray-400 dark:bg-gray-700" />

      <div className="mb-10 ml-10 mr-10">
        <div className="flex flex-wrap">
          <div className="mx-auto w-full max-w-[650px]">
            <form
              className="bg-slate-400"
              action="https://formbold.com/s/FORM_ID"
              method="POST"
            >
              <div className=" block pl-20 pr-20 text-base font-bold  uppercase text-[#07074D]">
                {" "}
                KIỂM TRA HÓA LỎNG THEO TC JRA 2002 - TIÊU CHUẨN VỀ THIẾT KẾ CÔNG
                TRÌNH TRÊN NỀN ĐẤT HÓA LỎNG
              </div>
              <div className="container flex  flex-col">
                <div className="flex flex-row justify-between  p-2">
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px]  w-full text-base text-xs font-medium text-[#07074D]"
                    >
                      Lớp
                    </label>
                    <input
                      value="2"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full items-end rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2  ">
                    <label
                      for="fName"
                      className=" block h-[50px] w-full text-base text-xs font-medium text-[#07074D]"
                    >
                      Z (m)
                    </label>

                    <input
                      value="1.0"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      Chiều dày (m)
                    </label>
                    <input
                      value="1.0"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className="  block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      Loại đất
                    </label>
                    <input
                      value="Sand"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className="  block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      FC(%)
                    </label>
                    <input
                      value="22%"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className="  block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      rd
                    </label>
                    <input
                      value="0.99"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className="  block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      σ'v (kPa)
                    </label>
                    <input
                      value="17.30"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      NSPT
                    </label>
                    <input
                      value="8.00"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      σv (kPa)
                    </label>
                    <input
                      value="17.30"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className=" flex flex-row  justify-between p-2 ">
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      L
                    </label>
                    <input
                      value="0.10"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      C1
                    </label>
                    <input
                      value="0.80"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>

                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      C2
                    </label>
                    <input
                      value="0.54"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      N1
                    </label>
                    <input
                      value="15.58"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      Na
                    </label>
                    <input
                      value="13.07"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      RL
                    </label>
                    <input
                      value="0.24"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      CW
                    </label>
                    <input
                      value="1.48"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      R
                    </label>
                    <input
                      value="0.36"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      FL
                    </label>
                    <input
                      value="3.65"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className=" p-3 ">
                  <div className=" mb-2">
                    <label
                      for="fName"
                      className=" block text-base text-xs font-medium text-[#07074D]"
                    >
                      Đánh giá
                    </label>
                    <label
                      for="fName"
                      className="block text-base text-xs font-medium text-[#FF0000]"
                    >
                      Có khả năng hóa lỏng
                    </label>
                  </div>
                </div>
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <table className="mx-auto mb-5 w-full max-w-[650px] table-auto text-left text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">STT</th>
            <th className="px-6 py-3">Đánh giá</th>
            <th className="px-6 py-3"> </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">1</td>
            <td className="px-6 py-4 text-red-400">Có khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">2</td>
            <td className="px-6 py-4 text-red-400">Bỏ khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">3</td>
            <td className="px-6 py-4 text-red-400">Bỏ khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">4</td>
            <td className="px-6 py-4 text-red-400">Bỏ khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">5</td>
            <td className="px-6 py-4 text-red-400">Có khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">6</td>
            <td className="px-6 py-4 text-red-400">Có khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">7</td>
            <td className="px-6 py-4 text-red-400">Có khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <hr class="my-8 h-px border-0 bg-gray-400 dark:bg-gray-700" />
      <div className="mb-10 ml-10 mr-10">
        <div className="flex flex-wrap">
          <div className="mx-auto w-full max-w-[650px]">
            <form
              className="bg-slate-400"
              action="https://formbold.com/s/FORM_ID"
              method="POST"
            >
              <div className=" block pl-20 pr-20 text-base font-bold  uppercase text-[#07074D]">
                {" "}
                KIỂM TRA HÓA LỎNG THEO TC GDP-9 2015 - CỤC KỸ THUẬT, ĐỊA KỸ
                THUẬT,"TÌM NĂNG HÓA LỎNG CỦA ĐẤT KHÔNG DÍNH"
              </div>
              <div className="container flex  flex-col">
                <div className="flex flex-row justify-between  p-2">
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px]  w-full text-base text-xs font-medium text-[#07074D]"
                    >
                      Lớp
                    </label>
                    <input
                      value="2"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full items-end rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2  ">
                    <label
                      for="fName"
                      className=" block h-[50px] w-full text-base text-xs font-medium text-[#07074D]"
                    >
                      Z (m)
                    </label>

                    <input
                      value="1.0"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      Chiều dày (m)
                    </label>
                    <input
                      value="1.0"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className="  block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      Loại đất
                    </label>
                    <input
                      value="Sand"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className="  block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      FC(%)
                    </label>
                    <input
                      value="22%"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className="  block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      rd
                    </label>
                    <input
                      value="0.99"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className="  block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      σ'v (kPa)
                    </label>
                    <input
                      value="17.30"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      NSPT
                    </label>
                    <input
                      value="8.00"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      σv (kPa)
                    </label>
                    <input
                      value="17.30"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className=" flex flex-row  justify-between p-2 ">
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      (CN)
                    </label>
                    <input
                      value="2.35"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      CSR
                    </label>
                    <input
                      value="0.80"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>

                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      N1(60)
                    </label>
                    <input
                      value="0.40"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      a
                    </label>
                    <input
                      value="0.08"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      b
                    </label>
                    <input
                      value="0.08"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      CSRM
                    </label>
                    <input
                      value="0.083"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      CSRreqM
                    </label>
                    <input
                      value="0.098"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      β
                    </label>
                    <input
                      value="1.10"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      FS
                    </label>
                    <input
                      value="1.33"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className=" p-3 ">
                  <div className=" mb-2">
                    <label
                      for="fName"
                      className=" block text-base text-xs font-medium text-[#07074D]"
                    >
                      Đánh giá
                    </label>
                    <label
                      for="fName"
                      className="block text-base text-xs font-medium text-[#FF0000]"
                    >
                      Bỏ khả năng hóa lỏng
                    </label>
                  </div>
                </div>
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <table className="mx-auto mb-5 w-full max-w-[650px] table-auto text-left text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">STT</th>
            <th className="px-6 py-3">Đánh giá</th>
            <th className="px-6 py-3"> </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">1</td>
            <td className="px-6 py-4 text-red-400">Bỏ khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">2</td>
            <td className="px-6 py-4 text-red-400">Bỏ khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">3</td>
            <td className="px-6 py-4 text-red-400">Có khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">4</td>
            <td className="px-6 py-4 text-red-400">Có khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">5</td>
            <td className="px-6 py-4 text-red-400">Có khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">6</td>
            <td className="px-6 py-4 text-red-400">Có khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <td className="px-6 py-4 text-blue-400">7</td>
            <td className="px-6 py-4 text-red-400">Có khả năng hóa lỏng</td>
            <td className="px-6 py-4 text-black">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <hr class="my-8 h-px border-0 bg-gray-400 dark:bg-gray-700" />
      <div className="mb-10 ml-10 mr-10">
        <div className="flex flex-wrap">
          <div className="mx-auto w-full max-w-[650px]">
            <form
              className="bg-slate-400"
              action="https://formbold.com/s/FORM_ID"
              method="POST"
            >
              <div className=" block pl-20 pr-20 text-base font-bold  uppercase text-blue-400">
                {" "}
                * TÍNH TOÁN SỨC CHỊU TẢI CỦA CỌC ĐƠN CÓ KỂ ĐẾN HÓA LỎNG TCVN 10304-2014 THIẾT KẾ MÓNG CỌC
              </div>
              <div className="container flex  flex-col">
                <div className="flex flex-row justify-between  p-2">
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px]  w-full text-base text-xs font-medium text-[#07074D]"
                    >
                      Lớp
                    </label>
                    <input
                      value="2"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full items-end rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className=" m-2  ">
                    <label
                      for="fName"
                      className=" block h-[50px] w-full text-base text-xs font-medium text-[#07074D]"
                    >
                      Z (m)
                    </label>

                    <input
                      value="1.0"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div  className ="flex flex-row justify-between  p-2">

                  
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      De
                    </label>
                    <input
                      value="0.0"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  </div>
                  </div>
                  <div  className ="flex flex-row justify-between  p-2">
                  <div className=" m-2  ">
                    <label
                      for="fName"
                      className="  block h-[30px] text-base text-xs font-medium text-[#FF0000]"
                    >
                      Sức chịu tải cực hạn thành cọc (UƩfili )
                    </label>
                    <div  className ="flex flex-row justify-between  p-2" ><div><label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      Không xét đến hóa lỏng
                    </label>
                    <input
                      value="6.0"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
                    /></div> <div><label
                    for="fName"
                    className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                  >
                   Xét đến hóa lỏng
                  </label>
                  <input
                    value="6.0"
                    type="text"
                    name="fName"
                    id="fName"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  /></div>
                    
                    </div>
                   
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className="  block h-[30px] text-base text-xs font-medium text-[#FF0000]"
                    >
                     Sức chịu tải cực hạn mũi cọc (qbAb)
                    </label>
                    <div  className ="flex flex-row justify-between  p-2"><div><label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                      Không xét đến hóa lỏng
                    </label>
                    <input
                      value="393.0"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
                    /></div> <div><label
                    for="fName"
                    className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                  >
                   Xét đến hóa lỏng
                  </label>
                  <input
                    value="393.0"
                    type="text"
                    name="fName"
                    id="fName"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  /></div>
                    
                    </div>
                   
                  </div>
                  <div className=" m-2 ">
                    <label
                      for="fName"
                      className="  block h-[30px] text-base text-xs font-medium text-[#FF0000]"
                    >
                     PSPT
                    </label>
                    <div  className ="flex flex-row justify-between  p-2"><div><label
                      for="fName"
                      className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                    >
                     Không xét đến hóa lỏng
                    </label>
                    <input
                      value="399.0"
                      type="text"
                      name="fName"
                      id="fName"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-blue-400 outline-none focus:border-[#6A64F1] focus:shadow-md"
                    /></div> <div><label
                    for="fName"
                    className=" block h-[50px] text-base text-xs font-medium text-[#07074D]"
                  >
                   Xét đến hóa lỏng
                  </label>
                  <input
                    value="399.0"
                    type="text"
                    name="fName"
                    id="fName"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#000] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  /></div>
                    
                    </div>
                   
                  </div>
                  </div>
                  
                
              </div>
              <div>
               
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <table className="mx-auto mb-5 w-full max-w-[650px] table-auto text-left text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Tổng</th>
            <th className="px-6 py-3">Thông số </th>
            <td className="px-6 py-4 text-black">
              <button>
             
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
</svg>

              </button>
            </td>
            
          </tr>
        </thead>
     
      </table>
      <button className="hover:shadow-form rounded-md bg-[#FF0000] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Đánh giá chung
                </button>
      <hr class="my-8 h-px border-0 bg-gray-400 dark:bg-gray-700" />
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
      <div className=" mb-6 grid grid-cols-3 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        <div className=" rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Biểu đồ 1
              </h5>
            </a>

            <img
              className="h-auto max-w-full rounded-lg"
              src="../../../public/img/chart1.png"
              alt="image description"
            />

            <a
              href="#"
              className=" inline-flex items-center rounded-lg bg-blue-700 p-2 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Watch more
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className=" rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Biểu đồ 2
              </h5>
            </a>

            <img
              className="h-auto max-w-full rounded-lg"
              src="../../../public/img/chart2.png"
              alt="image description"
            />

            <a
              href="#"
              className=" inline-flex items-center rounded-lg bg-blue-700 p-2 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Watch more
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className=" rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Biểu đồ 3
              </h5>
            </a>

            <img
              className="h-auto max-w-full rounded-lg"
              src="../../../public/img/chart3.png"
              alt="image description"
            />

            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-blue-700 p-2 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Watch more
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
