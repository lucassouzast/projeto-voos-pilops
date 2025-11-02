export interface Aircraft {
  name: string
  registration: string
  airline: string
}

export interface FlightData {
  date: string
  balance: number
  route: { from: string; to: string }
  xp: number
  missionBonus: number
}

export interface Flight {
  id: string
  aircraft: Aircraft
  flightData: FlightData
}