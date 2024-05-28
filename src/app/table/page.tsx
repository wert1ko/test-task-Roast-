import jsonData from "../../data/data.json";

const months = Object.keys(jsonData.results.app_opens.monday);
const weekdays = Object.keys(jsonData.results.app_opens);

function AppOpenedTable() {
  console.log(jsonData);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-left w-full ml-[25px] mt-[35px] mb-[35px]">
        <h1 className="text-white font-semibold text-[40px]">App Opened</h1>
      </div>
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
                return (
                  <td
                    className="text-white text-center w-[32px] rounded"
                    style={{
                      //@ts-ignore
                      backgroundColor: `rgba(3,255,209, 0.${jsonData.results.app_opens[day][month]})`,
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
  );
}

export default AppOpenedTable;
