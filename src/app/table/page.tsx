"use client";

import { useData } from "../providers";

function AppOpenedTable() {
  const { data, handleUpdateData } = useData();

  if (!data) {
    return (
      <p className="w-full text-white font-semibold text-[40px] text-center pt-10">
        Error...
      </p>
    );
  }

  const months = Object.keys(data.results.app_opens.monday);
  const weekdays = Object.keys(data.results.app_opens);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-left mt-[35px] mb-[35px]">
        <h1 className="w-full text-white font-semibold text-[40px]">
          App Opened
        </h1>
      </div>

      <div className="bg-white bg-opacity-5 px-5 py-3 rounded-3xl">
        <table
          style={{ borderCollapse: "separate", borderSpacing: "5px" }}
          className="w-[335px] h-[476px]"
        >
          <thead>
            <tr>
              <th></th>
              {weekdays.map((day) => (
                <th
                  className="text-white font-semibold text-[18px] m-1"
                  key={day}
                >
                  {day.substring(0, 1).toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {months.map((month) => (
              <tr className="text-white" key={month}>
                <td className="font-semibold text-lg w-[32px]">
                  {month.toUpperCase()}
                </td>
                {weekdays.map((day) => {
                  //@ts-ignore
                  const value = data.results.app_opens[day][month];
                  const backgroundColor =
                    value !== 0
                      ? `rgba(3,255,209, 0.${value})`
                      : "rgba(128, 128, 128, 0.2)";
                  return (
                    <td
                      className="text-white text-center w-[32px] rounded"
                      style={{
                        backgroundColor,
                      }}
                      key={`${month}-${day}`}
                    >
                      {
                        //@ts-ignore
                      }
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between max-w-[375px] w-full bg-white bg-opacity-5 px-5 py-3 rounded-3xl mt-7">
        <span className="text-white mr-[40px]">More</span>

        <div className="flex items-center space-x-2">
          <span className="bg-[rgba(3,255,209,1)] w-[17px] h-[17px] rounded"></span>
          <span className="bg-[rgba(3,255,209,1)] w-[17px] h-[17px] rounded opacity-[70%]"></span>
          <span className="bg-[rgba(3,255,209,1)] w-[17px] h-[17px] rounded opacity-[50%]"></span>
          <span className="bg-[rgba(3,255,209,1)] w-[17px] h-[17px] rounded opacity-[20%]"></span>
        </div>

        <span className="text-white ml-[40px]">Less</span>
      </div>
    </div>
  );
}

export default AppOpenedTable;
