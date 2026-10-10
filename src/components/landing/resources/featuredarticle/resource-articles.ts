export const sections = [
  "challenge",
  "spreadsheets",
  "workflow",
  "visibility",
  "scaling",
  "conclusion",
] as const;

export const statusColors = {
  scheduled: "bg-trip-scheduled/15 text-trip-scheduled",
  progress: "bg-trip-in-progress/15 text-trip-in-progress",
  completed: "bg-trip-completed/15 text-trip-completed",
} as const;
export const statuses = [
  { key: "scheduled", color: "bg-trip-scheduled" },
  { key: "progress", color: "bg-trip-delayed" },
  { key: "completed", color: "bg-trip-completed" },
] as const;
export const columns = ["route", "vehicle", "driver", "status"] as const;

export const trips = [
  {
    route: "Route A",
    vehicle: "Bus 12",
    driver: "Driver 1",
    status: "scheduled",
  },
  {
    route: "Route B",
    vehicle: "Van 04",
    driver: "Driver 2",
    status: "progress",
  },
  {
    route: "Route C",
    vehicle: "Bus 07",
    driver: "Driver 3",
    status: "completed",
  },
] as const;

export const workflowSteps = [
  "request",
  "route",
  "assignment",
  "trip",
  "invoice",
] as const;
