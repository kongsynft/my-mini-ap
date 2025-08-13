import { Redis } from "@upstash/redis";
import { APP_NAME } from "./constants";

// In-memory fallback storage
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const localStore = new Map<string, any>();

// Use Redis if KV env vars are present, otherwise use in-memory
const useRedis = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN;
const redis = useRedis ? new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
}) : null;

function getUserNotificationDetailsKey(fid: number): string {
  return `${APP_NAME}:user:${fid}`;
}

export async function getUserNotificationDetails(
  fid: number
// eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any | null> {
  const key = getUserNotificationDetailsKey(fid);
  if (redis) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return await redis.get<any>(key);
  }
  return localStore.get(key) || null;
}

export async function setUserNotificationDetails(
  fid: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  notificationDetails: any
): Promise<void> {
  const key = getUserNotificationDetailsKey(fid);
  if (redis) {
    await redis.set(key, notificationDetails);
  } else {
    localStore.set(key, notificationDetails);
  }
}

export async function deleteUserNotificationDetails(
  fid: number
): Promise<void> {
  const key = getUserNotificationDetailsKey(fid);
  if (redis) {
    await redis.del(key);
  } else {
    localStore.delete(key);
  }
}
