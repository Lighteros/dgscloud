export const headerRoute = [
  { label: "Home", link: "#home" },
  // { label : 'Roadmap', link : '#roadmap' },
  { label: "Services", link: "#services" },
  { label: "Tokenomics", link: "#tokenomics" },
  { label: "Roadmap", link: "#roadmap" },
  { label: "Statistic", link: "/dashboard" },
];

export const tableData = [
  { text: "Cloud Compute", value: "5" },
  { text: "Cloud Dedicated", value: "5" },
  { text: "Cloud Gpu", value: "5" },
  { text: "Bare Metal", value: "5" },
  { text: "Total Cost", value: "$231/mo" },
];

export const dotsPosition = [
  { x: "15.78", y: "37.5", city: "Honolulu", continent: "North America" },
  { x: "24.58", y: "36.8", city: "Los Angeles", continent: "North America" },
  { x: "23.3", y: "33", city: "Silicon Valley", continent: "North America" },
  {
    x: "23.95",
    y: "27.6",
    city: "Seattle",
    continent: "North America",
  },
  {
    x: "26.96",
    y: "29.76",
    city: "Dallas",
    continent: "North America",
  },
  {
    x: "31.1",
    y: "31.2",
    city: "Miami",
    continent: "North America",
  },
  {
    x: "31.45",
    y: "38.15",
    city: "Atlanta",
    continent: "North America",
  },
  {
    x: "29.45",
    y: "47.5",
    city: "Mexico City",
    continent: "North America",
  },
  {
    x: "32.5",
    y: "16.8",
    city: "Chicago",
    continent: "North America",
  },
  {
    x: "34.75",
    y: "9.60",
    city: "Toronto",
    continent: "North America",
  },
  {
    x: "34.75",
    y: "24",
    city: "New Jersey",
    continent: "North America",
  },
  {
    x: "33",
    y: "80",
    city: "Santiago",
    continent: "Latin America",
  },
  {
    x: "38.95",
    y: "72.9",
    city: "S\u00e3o Paulo",
    continent: "Latin America",
  },
  {
    x: "46.84",
    y: "26.2",
    city: "Paris",
    continent: "Europe",
  },
  {
    x: "47.25",
    y: "19.3",
    city: "Madrid",
    continent: "Europe",
  },
  {
    x: "47.43",
    y: "15",
    city: "London",
    continent: "Europe",
  },
  {
    x: "50.47",
    y: "16.8",
    city: "Frankfurt",
    continent: "Europe",
  },
  {
    x: "49.84",
    y: "22.7",
    city: "Manchester",
    continent: "Europe",
  },

  {
    x: "51.65",
    y: "9.8",
    city: "Amsterdam",
    continent: "Europe",
  },
  {
    x: "55.8",
    y: "15",
    city: "Stockholm",
    continent: "Europe",
  },
  {
    x: "55.8",
    y: "20",
    city: "Warsaw",
    continent: "Europe",
  },
  {
    x: "55.9",
    y: "33",
    city: "Tel Aviv",
    continent: "Asia",
  },
  {
    x: "64.35",
    y: "33",
    city: "Delhi NCR",
    continent: "Asia",
  },
  {
    x: "64.45",
    y: "47.5",
    city: "Bangalore",
    continent: "Asia",
  },
  {
    x: "63.1",
    y: "40",
    city: "Mumbai",
    continent: "Asia",
  },
  {
    x: "75.8",
    y: "35",
    city: "Osaka",
    continent: "Asia",
  },
  {
    x: "76.4",
    y: "29.5",
    city: "Tokyo",
    continent: "Asia",
  },
  {
    x: "73.8",
    y: "29.5",
    city: "Seoul",
    continent: "Asia",
  },
  {
    x: "70.3",
    y: "54.5",
    city: "Singapore",
    continent: "Asia",
  },
  {
    x: "55.3",
    y: "60.2",
    city: "Johannesburg",
    continent: "Africa",
  },
  {
    x: "76.3",
    y: "83.25",
    city: "Sydney",
    continent: "Australia",
  },
  {
    x: "79.95",
    y: "79.9",
    city: "Melbourne",
    continent: "Australia",
  },
];

export const optionChart = {
  chart: {
    type: "pie",
  },
  title: {
    text: "",
  },
  credits: {
    enabled: false,
  },
  tooltip: {
    valueSuffix: "%",
  },
  plotOptions: {
    series: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: [
        {
          enabled: true,
          distance: 20,
          color: "#FFF",
          style: {
            textOutline: 0,
          },
        },
        {
          outline: "none",
          color: "#FFF",
          enabled: true,
          distance: -40,
          format: "",
          style: {
            fontSize: "1.2em",
            textOutline: "none",
            opacity: 0.7,
          },
          filter: {
            operator: ">",
            property: "percentage",
            value: 10,
          },
        },
      ],
    },
  },
  series: [
    {
      name: "Percentage",
      colorByPoint: true,
      data: [
        {
          name: "DEX LP (Uniswap)",
          y: 84,
          color: "#16ECC5",
          sliced: true,
          selected: true,
        },
        {
          name: "Advisors & Partnership",
          y: 8,
          color: "#8F00FF",
        },
        {
          name: "CEX",
          y: 8,
          color: "#0085FF",
        },
      ],
    },
  ],
};

export function convertDate(dateCreated) {
  const createdDate = new Date(dateCreated);

  const currentDate = new Date();

  const difference_ms = currentDate - createdDate;

  const difference_days = Math.floor(difference_ms / (1000 * 60 * 60 * 24));

  let displayText;
  if (difference_days === 0) {
    displayText = "Created today";
  } else if (difference_days === 1) {
    displayText = "Created 1 day ago";
  } else {
    displayText = `Created ${difference_days} days ago`;
  }

  return displayText;
}
