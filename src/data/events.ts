interface event {
  id: number | string
  day: number | string
  hour: number
  hour2?: number
  minute?: number
  minute2?: number
  points: [number, number]
}

export const coordinates: {
  id: number
  location: string
  points: [number, number][]
}[] = [
  {
    id: 1,
    location: "Hovedøya",
    points: [
      [59.8978423, 10.7308809],
      [59.8954658, 10.7290597],
    ],
  },
  {
    id: 2,
    location: "Gressholmen",
    points: [[59.884168268723364, 10.722233481109127]],
  },
  {
    id: 3,
    location: "Langøyene",
    points: [[59.8696777, 10.7195264]],
  },
]

export const mapData: Array<event> = [
  {
    // Hovedøya Konsert 1 on day 1 and day 3
    id: 1,
    day: "7. & 9",
    hour: 11,
    minute: 30,
    points: coordinates[0].points[0],
  },
  {
    // Hovedøya Konsert 2
    id: 2,
    day: "7. & 9",
    hour: 13,
    minute: 30,
    points: coordinates[0].points[1],
  },
  {
    // Gressholmen Konsert 1
    id: "1",
    day: 8,
    hour: 17,
    minute: 30,
    points: coordinates[1].points[0],
  },
  {
    // Langøyene Konsert 1
    id: 1,
    day: 10,
    hour: 12,
    points: coordinates[2].points[0],
  },
]

export const timetableData = [
  {
    location: "Hovedøya",
    locationName: "Hovedøya,+0150+Oslo,+Norge",
    date: "Torsdag 07.07",
    events: [
      {
        text: "11:30 Konsert 1",
        points: coordinates[0].points[0],
      },
      {
        text: "13:30 Konsert 2",
        points: coordinates[0].points[1],
      },
    ],
  },
  {
    location: "Gressholmen",
    locationName: "Gressholmen",
    date: "Fredag 08.07",
    events: [
      {
        text: "17:30 Konsert 1",
        points: coordinates[1].points[0],
      },
    ],
  },
  {
    location: "Hovedøya",
    locationName: "Hovedøya,+0150+Oslo,+Norge",
    date: "Lørdag 09.07",
    events: [
      {
        text: "11:30 Konsert 1",
        points: coordinates[0].points[0],
      },
      {
        text: "13:30 Konsert 2",
        points: coordinates[0].points[1],
      },
    ],
  },
  {
    location: "Langøyene",
    locationName: "Langoyene",
    date: "Søndag 10.07",
    events: [
      {
        text: "12:00 Konsert 1",
        points: coordinates[2].points[0],
      },
    ],
  },
]
