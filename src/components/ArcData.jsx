const arcData = [
  {
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 34.0522,
    endLng: -118.2437,
    color: "red",
  },
  {
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: -37.8136,
    endLng: 144.9631,
    color: "blue",
  },
  {
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 48.8566,
    endLng: 2.3522,
    color: "green",
  },
  {
    startLat: 35.6895,
    startLng: 139.6917,
    endLat: 22.3193,
    endLng: 114.1694,
    color: "purple",
  },
  {
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -23.5505,
    endLng: -46.6333,
    color: "yellow",
  },
  {
    startLat: 51.1657,
    startLng: 10.4515,
    endLat: 52.52,
    endLng: 13.405,
    color: "pink",
  },
  {
    startLat: -1.2864,
    startLng: 36.8172,
    endLat: -4.0435,
    endLng: 39.6682,
    color: "white",
  },
  {
    startLat: 55.7558,
    startLng: 37.6176,
    endLat: 59.9343,
    endLng: 30.3351,
    color: "red",
  },
  {
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: -12.0464,
    endLng: -77.0428,
    color: "blue",
  },
  {
    startLat: 35.6895,
    startLng: 139.6917,
    endLat: 37.5665,
    endLng: 126.978,
    color: "green",
  },
  {
    startLat: 24.8607,
    startLng: 67.0011,
    endLat: 28.6139,
    endLng: 77.209,
    color: "orange",
  },
  {
    startLat: 31.2304,
    startLng: 121.4737,
    endLat: 22.3964,
    endLng: 114.1095,
    color: "pink",
  },
  {
    startLat: 35.6892,
    startLng: 51.389,
    endLat: 33.6844,
    endLng: 73.0479,
    color: "yellow",
  },
  {
    startLat: 6.9271,
    startLng: 79.8612,
    endLat: 4.2105,
    endLng: 101.9758,
    color: "white",
  },
  {
    startLat: 25.2769,
    startLng: 51.531,
    endLat: 24.7136,
    endLng: 46.6753,
    color: "teal",
  },
  {
    startLat: 30.0444,
    startLng: 31.2357,
    endLat: 25.2048,
    endLng: 55.2708,
    color: "brown",
  },
  {
    startLat: 33.8886,
    startLng: 35.4955,
    endLat: 32.4279,
    endLng: 53.688,
    color: "cyan",
  },
  {
    startLat: 36.8065,
    startLng: 10.1815,
    endLat: 33.8869,
    endLng: 9.5375,
    color: "magenta",
  },
  {
    startLat: 15.5527,
    startLng: 48.5164,
    endLat: 12.8628,
    endLng: 30.2176,
    color: "lime",
  },
  {
    startLat: -1.286389,
    startLng: 36.817223,
    endLat: -6.792354,
    endLng: 39.208328,
    color: "indigo",
  },
  {
    startLat: 6.5244,
    startLng: 3.3792,
    endLat: -33.9249,
    endLng: 18.4241,
    color: "red",
  },
  {
    startLat: 12.9716,
    startLng: 77.5946,
    endLat: 1.2921,
    endLng: 36.8219,
    color: "blue",
  },
  {
    startLat: 9.0579,
    startLng: 7.4951,
    endLat: -4.0435,
    endLng: 39.6682,
    color: "white",
  },
  {
    startLat: -20.1654,
    startLng: 57.5214,
    endLat: -17.824858,
    endLng: 31.053028,
    color: "purple",
  },
  {
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 40.7128,
    endLng: -74.006,
    color: "green",
  },
  {
    startLat: 48.8566,
    startLng: 2.3522,
    endLat: 34.0522,
    endLng: -118.2437,
    color: "cyan",
  },
  {
    startLat: 52.52,
    startLng: 13.405,
    endLat: 25.7617,
    endLng: -80.1918,
    color: "orange",
  },
  {
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 38.9072,
    endLng: -77.0369,
    color: "yellow",
  },
  {
    startLat: 55.7558,
    startLng: 37.6176,
    endLat: 42.3601,
    endLng: -71.0589,
    color: "blue",
  },
  {
    startLat: 51.5074, // Europe (London)
    startLng: -0.1278,
    endLat: -23.5505, // Africa (Johannesburg)
    endLng: -46.6333,
    color: "cyan",
  },
  {
    startLat: -23.5505, // Africa (Johannesburg)
    startLng: -46.6333,
    endLat: 34.0522, // America (Los Angeles)
    endLng: -118.2437,
    color: "orange",
  },
  {
    startLat: 40.7128, // America (New York)
    startLng: -74.006,
    endLat: 48.8566, // Europe (Paris)
    endLng: 2.3522,
    color: "red",
  },
  {
    startLat: -23.5505, // South America (São Paulo)
    startLng: -46.6333,
    endLat: 34.0522, // North America (Los Angeles)
    endLng: -118.2437,
    color: "pink",
  },
  {
    startLat: 24.7136, // Saudi Arabia (Riyadh)
    startLng: 46.6753,
    endLat: 31.9539, // Jordan (Amman)
    endLng: 35.9106,
    color: "red",
  },
  {
    startLat: 33.8938, // Lebanon (Beirut)
    startLng: 35.5018,
    endLat: 38.9637, // Turkey (Istanbul)
    endLng: 35.2433,
    color: "green",
  },
  {
    startLat: 30.0444, // Egypt (Cairo)
    startLng: 31.2357,
    endLat: 32.8872, // Libya (Tripoli)
    endLng: 13.1913,
    color: "gold",
  },
  {
    startLat: 33.9716, // Morocco (Rabat)
    startLng: -6.8498,
    endLat: 28.0339, // Algeria (Algiers)
    endLng: 1.6596,
    color: "purple",
  },
  {
    startLat: 36.7322, // Algeria (Algiers)
    startLng: 3.0877,
    endLat: 36.7213, // Spain (Málaga)
    endLng: -4.4214,
    color: "lime",
  },
  {
    startLat: 36.8065, // Tunisia (Tunis)
    startLng: 10.1815,
    endLat: 40.4168, // Spain (Madrid)
    endLng: -3.7038,
    color: "magneta",
  },
  {
    startLat: -37.8136,
    startLng: 144.9631,
    endLat: 19.076,
    endLng: 72.8777,
    color: "red",
  },
  {
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 28.7041,
    endLng: 77.1025,
    color: "green",
  },
  {
    startLat: 55.7558,
    startLng: 37.6176,
    endLat: 39.9042,
    endLng: 116.4074,
    color: "purple",
  },
  {
    startLat: 59.9343,
    startLng: 30.3351,
    endLat: 31.2304,
    endLng: 121.4737,
    color: "orange",
  },
  {
    startLat: 39.9042,
    startLng: 116.4074,
    endLat: -33.8688,
    endLng: 151.2093,
    color: "blue",
  },
];

export const arcData2 = [
  arcData[0],
  arcData[2],
  arcData[4],
  arcData[6],
  arcData[8],
  arcData[10],
  arcData[12],
  arcData[14],
  arcData[16],
  arcData[18],
  arcData[20],
  arcData[22],
  arcData[24],
  arcData[26],
  arcData[28],
  arcData[30],
  arcData[32],
  arcData[34],
  arcData[36],
  arcData[38],
  arcData[40],
];

export const arcData3 = [
  arcData[0],
  arcData[1],
  arcData[2],
  arcData[4],
  arcData[5],
  arcData[6],
  arcData[8],
  arcData[9],
  arcData[10],
  arcData[12],
  arcData[14],
  arcData[16],
  arcData[18],
  arcData[20],
  arcData[21],
  arcData[22],
  arcData[24],
  arcData[26],
  arcData[27],
  arcData[28],
  arcData[30],
  arcData[32],
  arcData[33],
  arcData[34],
  arcData[36],
  arcData[37],
  arcData[38],
  arcData[40],
  arcData[41],
];
export default arcData;
