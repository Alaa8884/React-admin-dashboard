/* eslint-disable react/prop-types */
import { ResponsivePie } from "@nivo/pie";
import { pieData } from "../../assets/data/pieChartData";
import { Box, useTheme } from "@mui/material";
import HeaderInfo from "../../components/HeaderInfo";

function Pie({ isDashboard = false }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: { xs: "95vw", sm: "" },
        height: isDashboard ? "280px" : "80vh",
      }}
    >
      {isDashboard ? (
        ""
      ) : (
        <HeaderInfo title={"Pie Chart"} subTitle={"Simple Pie Chart"} />
      )}
      <ResponsivePie
        data={pieData}
        margin={
          isDashboard
            ? { top: 15, right: 0, bottom: 15, left: 0 }
            : { top: 40, right: 60, bottom: 80, left: 60 }
        }
        theme={{
          text: {
            fontSize: 13,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.text.primary,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.text.primary,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.text.primary,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 12,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        startAngle={-56}
        innerRadius={0.7}
        padAngle={3}
        cornerRadius={4}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "purpleRed_green" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.5]],
        }}
        enableArcLabels={isDashboard ? false : true}
        enableArcLinkLabels={isDashboard ? false : true}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={3}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 6]],
        }}
        defs={
          !isDashboard && [
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]
        }
        fill={
          !isDashboard && [
            {
              match: {
                id: "ruby",
              },
              id: "dots",
            },
            {
              match: {
                id: "c",
              },
              id: "dots",
            },
            {
              match: {
                id: "go",
              },
              id: "dots",
            },
            {
              match: {
                id: "python",
              },
              id: "dots",
            },
            {
              match: {
                id: "scala",
              },
              id: "lines",
            },
            {
              match: {
                id: "lisp",
              },
              id: "lines",
            },
            {
              match: {
                id: "elixir",
              },
              id: "lines",
            },
            {
              match: {
                id: "javascript",
              },
              id: "lines",
            },
          ]
        }
        legends={
          !isDashboard && [
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: theme.palette.text.primary,
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 20,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "purple",
                  },
                },
              ],
            },
          ]
        }
      />
    </Box>
  );
}

export default Pie;
