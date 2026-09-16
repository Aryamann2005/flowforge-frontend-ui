export type JobStatus = "WAITING" | "ACTIVE" | "COMPLETED" | "FAILED" | "DELAYED";
export type JobType = "GENERATE_REPORT" | "SEND_EMAIL" | "PROCESS_DATA";

export type Job = {
  id: string;
  type: JobType;
  priority: number;
  status: JobStatus;
  createdAt: string;
  startedAt?: string;
  completedAt?: string;
  attempts: number;
  error?: string;
  duration?: string;
};

export const jobs: Job[] = [
  { id: "job_8f4c1a", type: "GENERATE_REPORT", priority: 9, status: "ACTIVE", createdAt: "Sep 16, 07:18", startedAt: "Sep 16, 07:18", attempts: 1, duration: "Running" },
  { id: "job_b2d79e", type: "PROCESS_DATA", priority: 7, status: "COMPLETED", createdAt: "Sep 16, 07:12", startedAt: "Sep 16, 07:12", completedAt: "Sep 16, 07:14", attempts: 1, duration: "1m 42s" },
  { id: "job_1e83af", type: "SEND_EMAIL", priority: 4, status: "WAITING", createdAt: "Sep 16, 07:09", attempts: 0, duration: "—" },
  { id: "job_94cc20", type: "PROCESS_DATA", priority: 10, status: "FAILED", createdAt: "Sep 16, 06:58", startedAt: "Sep 16, 06:58", completedAt: "Sep 16, 07:01", attempts: 3, error: "Redis connection timed out after 30,000ms", duration: "2m 51s" },
  { id: "job_62ad11", type: "GENERATE_REPORT", priority: 8, status: "DELAYED", createdAt: "Sep 16, 06:44", attempts: 0, duration: "—" },
  { id: "job_a791d2", type: "SEND_EMAIL", priority: 5, status: "COMPLETED", createdAt: "Sep 16, 06:31", startedAt: "Sep 16, 06:31", completedAt: "Sep 16, 06:31", attempts: 1, duration: "12s" },
  { id: "job_23f87b", type: "GENERATE_REPORT", priority: 6, status: "COMPLETED", createdAt: "Sep 16, 06:22", startedAt: "Sep 16, 06:23", completedAt: "Sep 16, 06:25", attempts: 1, duration: "2m 08s" },
  { id: "job_d8103c", type: "PROCESS_DATA", priority: 3, status: "WAITING", createdAt: "Sep 16, 06:14", attempts: 0, duration: "—" },
  { id: "job_55bd8a", type: "SEND_EMAIL", priority: 2, status: "COMPLETED", createdAt: "Sep 16, 06:02", startedAt: "Sep 16, 06:02", completedAt: "Sep 16, 06:02", attempts: 2, duration: "18s" },
  { id: "job_e49a12", type: "GENERATE_REPORT", priority: 8, status: "COMPLETED", createdAt: "Sep 16, 05:48", startedAt: "Sep 16, 05:49", completedAt: "Sep 16, 05:52", attempts: 1, duration: "3m 11s" },
];

export const activityData = [
  { time: "00:00", completed: 36, failed: 3 }, { time: "04:00", completed: 28, failed: 2 },
  { time: "08:00", completed: 58, failed: 5 }, { time: "12:00", completed: 76, failed: 4 },
  { time: "16:00", completed: 63, failed: 7 }, { time: "20:00", completed: 91, failed: 4 },
  { time: "Now", completed: 82, failed: 3 },
];

export const workers = [
  { id: "worker-us-east-01", region: "US East", status: "ONLINE", active: 4, completed: 1842, failed: 12, rate: "28.4/min", heartbeat: "4s ago" },
  { id: "worker-us-east-02", region: "US East", status: "ONLINE", active: 3, completed: 1736, failed: 9, rate: "25.1/min", heartbeat: "2s ago" },
  { id: "worker-eu-west-01", region: "EU West", status: "ONLINE", active: 2, completed: 1210, failed: 7, rate: "19.8/min", heartbeat: "5s ago" },
  { id: "worker-ap-south-01", region: "AP South", status: "DEGRADED", active: 1, completed: 886, failed: 31, rate: "8.2/min", heartbeat: "38s ago" },
];

export const queue = { name: "flowforge-jobs", waiting: 12, active: 10, completed: 4821, failed: 59, health: "HEALTHY", throughput: "81/min" };

export const typeData = [
  { name: "Reports", value: 42 }, { name: "Data", value: 35 }, { name: "Email", value: 23 },
];