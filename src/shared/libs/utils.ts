import dayjs from "dayjs"
import { clsx } from "clsx"
import type { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseReadableDate(date: string) {
  return dayjs(date).format("MMM, DD YYYY")
}
